const Model = require('./Model')

class Server {
  constructor (app, config) {
    this.app = app
    this.config = config
    this._httpServer = null
    this._model = null
  }

  start () {
    this._httpServer = this.app.listen(this.config.port)
    return Model.connect(this.config)
      .then((model) => {
        this._model = model
        return Promise.resolve(this);
      })
      .catch((e)=> {
        this._httpServer.close()
        return Promise.reject(e)
      })
  }

  stop () {
    this._httpServer.close()
    return this._model.close();
  }
}

module.exports = Server;
