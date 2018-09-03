class MongoClient {
  static connect(someStr) {
    console.log('woot woot')
    return new Promise((resolve)=>{
      resolve(new MongoClient)
    })
  }
}


module.exports = {
  MongoClient
}
