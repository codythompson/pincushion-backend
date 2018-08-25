const Express = require('jest-express')

const Server = require('./Server')
const Config = require('./Config')

describe('Server', ()=>{
  let config = new Config({
    port: 3001
  });
  let app, server;
  beforeEach(() => {
    app = new Express();
    server = new Server(app, config)
  })

  afterEach(()=>{
    app.resetMocked();
  })

  describe('start', ()=>{
    it('should listen on the specified port', ()=>{
      server.start();
      expect(app.listen).toBeCalledWith(3001)
    })
  })
})
