class MongoClient {
}
MongoClient.connect = jest.fn(() => {
  return new Promise((resolve, reject) =>{
    if (MongoClient.__mockFailedConnection) {
      reject(new Error('mock mongo error'))
    } else {
      resolve(new MongoClient)
    }
  })
})

MongoClient.__mockFailedConnection = false

module.exports = {
  MongoClient,
  woozers: 'wowzers'
}