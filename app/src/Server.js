class Server {
  constructor (app, config) {
    this.app = app
    this.config = config
    this._httpServer = null
  }

  start () {
    this._httpServer = this.app.listen(this.config.port)
  }

  stop () {
    this._httpServer.close()
  }
}

module.exports = Server;
