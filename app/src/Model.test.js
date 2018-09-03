jest.mock('mongodb')

const MongoClient = require('mongodb').MongoClient

const Model = require('./Model')

describe('Model', ()=>{

  it('should have a static connect method that takes a config object and returns a model instance', () => {
    return Model.connect({
      dbUsername: 'blah',
      dbPassword: 'blah'
    })
    .then(m => {
      try {
        expect(m).toBeInstanceOf(Model)
        expect(m.client).toBeInstanceOf(MongoClient)
      } catch (e) {
        return Promise.reject(e)
      }
    })
  })
})
