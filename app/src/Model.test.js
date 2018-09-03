const Model = require('./Model')

let mongodb, dbClient

describe('Model', ()=>{
  beforeAll(()=>{
    // jest.mock('mongodb')
    mongodb = require('mongodb')
    return mongodb.MongoClient
      .connect('mongodb://app:pwordreplacem@localhost/pincushion')
      .catch(console.log.bind(console, 'mmk\n',))
      .then((client) => {
        dbClient = client
      })
  })

  it('should accept a mongodb client instance as a constructor arg', () => {
    const m = new Model(dbClient)
    expect(m.client).toBeInstanceOf(mongodb.MongoClient)
  })
})