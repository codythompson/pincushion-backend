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
        .then((m) => {
          m.client.__mockCollection('mockCollection')
          return m
        })
        .then(m => m.runCreate(EntityAction.create().collection('mockCollection')))
        .then((result) => {
          try {
            expect(result.success).toEqual(true)
            expect(result.error).toBeNull()
            // TODO test for insert result.result
          } catch (e) {
            return Promise.reject(e)
          }
        })
    })

    it('it should call mongoclient.collection.insertMany with the correct collection and provided records', () => {
      const c1 = EntityAction.create()
        .record({
          name: 'test name blah',
          description: 'test desc blah blah blah'
        }, {
          name: 'other test name blah',
          description: 'other test desc blah blah blah'
        })
        .collection('mockCollection')
      return Model.connect({
        dbUsername: 'blah',
        dbPassword: 'blah'
      })
        .then((m) => {
          m.client.__mockCollection('mockCollection')
          return m.runCreate(c1)
            .then(() => m)
        })
        .then((m) => {
          const mockFunc = m.client.collection('mockCollection').insertMany
          expect(mockFunc).toBeCalledTimes(1)
          expect(mockFunc).toBeCalledWith(
            expect.arrayContaining([
              expect.objectContaining({
                name: 'test name blah',
                description: 'test desc blah blah blah'
              }),
              expect.objectContaining({
                name: 'other test name blah',
                description: 'other test desc blah blah blah'
              })
            ])
          )
        })
    })
  })

  describe('run', () => {
    it ('should call the method corresponding to the action passed in', () => {
      // we can skip the async connect call, but we may need it in the future
      const m = new Model(null)
      m.runCreate = jest.fn()
      m.run(EntityAction.create())
      expect(m.runCreate).toBeCalledTimes(1)
    })
  })

  describe('disconnect', () => {
    it('should close the mongodb client', () => {
      return Model.connect({
        dbUsername: 'blah',
        dbPassword: 'blah'
      })
        .then(m => {
          m.close()
          return expect(m.client.close).toBeCalledTimes(1)
        })
    })
  })
})
