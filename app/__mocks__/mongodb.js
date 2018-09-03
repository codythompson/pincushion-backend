class MongoClient {
}
MongoClient.connect = jest.fn(() => {
  return new Promise((resolve)=>{
    resolve(new MongoClient)
  })
})

module.exports = {
  MongoClient,
  woozers: 'wowzers'
}
