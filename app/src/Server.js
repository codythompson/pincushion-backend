class Server {
  constructor (app, config) {
    this.app = app
    this.config = config
  }

  start () {
    this.app.listen(this.config.port)
  }
}

module.exports = Server;
