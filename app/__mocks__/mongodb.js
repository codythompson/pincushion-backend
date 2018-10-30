class MongoClient {
  constructor () {
    this.__mockCollections = {}
  }

  collection (collectionName) {
    return this.__mockCollections[collectionName]
  }

  __mockCollection (collectionName) {
    this.__mockCollections[collectionName] = {
      insertMany: jest.fn()
        .mockImplementation(()=>{
          return Promise.resolve()
        })
    }
  }

  __mockClear () {
    for (let collName in this.__mockCollections) {
      this.__mockCollections[collName].insertMany.mockClear()
    }
  }
}

MongoClient.connect = jest.fn(() => {
  return new Promise((resolve, reject) =>{
    if (MongoClient.__mockFailedConnection) {
      reject(new Error('mock mongo error'))
    } else {
      resolve(new MongoClient())
    }
  })
})

MongoClient.prototype.close = jest.fn()

MongoClient.__mockFailedConnection = false

module.exports = {
  MongoClient
}
