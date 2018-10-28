jest.mock('mongodb')
jest.mock('express')

const MongoClient = require('mongodb').MongoClient
const Express = require('express')

const Server = require('./Server')
const Config = require('./Config')

describe('Server', ()=>{
  let config = new Config({
    dbUsername: 'blah',
    dbPassword: 'blah',
    port: 3001
  });
  let app, server;
  beforeEach(() => {
    app = new Express();
    server = new Server(app, config)
  })

  afterEach(()=>{
    MongoClient.connect.mockClear()
  })

  describe('start', ()=>{
    it('should listen on the specified port', ()=>{
      server.start();
      expect(app.listen).toBeCalledWith(3001)
    })

    it('should open a db connection', ()=>{
      return server.start()
        .then(()=>{
          expect(MongoClient.connect).toBeCalledTimes(1)
        })
    })

  })
  describe('stop', ()=>{
    it('should close the db connection', ()=>{
      return server.start()
        .then(server.stop.bind(server))
        .then(()=> {
          expect(server._model.client.close).toBeCalledTimes(1)
        })
    })
  })
})
