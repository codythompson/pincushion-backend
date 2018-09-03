const MongoClient = require('mongodb').MongoClient

class Model {
  constructor(client) {
    this.client = client
  }

  static connect (config) {
    const connStr = `mongodb://${config.dbUsername}:${config.dbPassword}@localhost/pincushion`
    return MongoClient.connect(connStr)
      .then(client => new Model(client))
  }
}

module.exports = Model
