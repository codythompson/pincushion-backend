jest.mock('mongodb')

const MongoClient = require('mongodb').MongoClient

const Model = require('./Model')
const PincushionError = require('./PincushionError')
const EntityAction = require('./EntityAction')

describe('Model', () => {
  beforeEach(() => {
    MongoClient.__mockFailedConnection = false
  })

  describe('connect', () => {

    it('should resolve with a model instance', () => {
      return Model.connect({
        dbUsername: 'blah',
        dbPassword: 'blah'
      })
        .then(m => {
          try {
            expect(MongoClient.connect).toBeCalledTimes(1)
            expect(m).toBeInstanceOf(Model)
            expect(m.client).toBeInstanceOf(MongoClient)
          } catch (e) {
            return Promise.reject(e)
          }
        })
    })

    it('should reject with a PincushionError if config is missing db credentials', () => {
      return Promise.all([
        expect(Model.connect({}))
          .rejects.toThrow(PincushionError),
        expect(Model.connect({
          dbUsername: 'blah'
        }))
          .rejects.toThrow(PincushionError),
        expect(Model.connect({
          dbPassword: 'dee'
        }))
          .rejects.toThrow(PincushionError)
      ])
        .catch(e => Promise.reject(e))
    })

    it('should reject if a connection can\'t be established', () => {
      MongoClient.__mockFailedConnection = true
      return expect(Model.connect({
        dbUsername: 'blah',
        dbPassword: 'blah'
      })).rejects.toThrow(PincushionError)
    })
  })

  describe('runCreate', () => {
    it('it should resolve with a result object', () => {
      return Model.connect({
        dbUsername: 'blah',
        dbPassword: 'blah'
      })
        .then(m => m.runCreate(EntityAction.create()))
        .then((result) => {
          try {
            expect(result.success).toEqual(true)
            expect(result.error).toBeNull()
            expect(result.result).toBeNull()
          } catch (e) {
            return Promise.reject(e)
          }
        })
    })
  })
})
