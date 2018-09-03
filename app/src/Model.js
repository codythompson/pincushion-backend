const MongoClient = require('mongodb').MongoClient
const Error = require('./PincushionError')

class Model {
  constructor(client) {
    this.client = client
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
