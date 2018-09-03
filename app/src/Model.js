const MongoClient = require('mongodb').MongoClient

const Error = require('./PincushionError')
const EntityAction = require('./EntityAction')

const methodMap = {
  [EntityAction.CREATE]: 'runCreate'
}

class Model {
  constructor(client) {
    this.client = client
  }

  runCreate (entityAction) {
    return Promise.resolve({
      success: true,
      error: null,
      result: null
    })
  }

  run (entityAction) {
    this[methodMap[entityAction.action]](entityAction)
  }

  close () {
    this.client.close()
  }

  static connect (config) {
    if (typeof config.dbUsername !== 'string' || typeof config.dbPassword !== 'string') {
      return Promise.reject(new Error('config object must have dbUsername and dbPassword field', 'connect (static)', 'Model'))
    }
    const connStr = `mongodb://${config.dbUsername}:${config.dbPassword}@localhost/pincushion`
    return MongoClient.connect(connStr)
      .then(client => new Model(client))
      .catch(() => {
        return Promise.reject(new Error('Error connectiont to mongodb', 'connect (static)', 'Model'))
      })
  }
}

module.exports = Model
