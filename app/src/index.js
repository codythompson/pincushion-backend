const express = require('express')
const path = require('path')

const Config = require('./Config')
const Server = require('./Server')

const DEFAULT_PATH = path.resolve(__dirname, '../localConfig.json')

const start = (localConfigPath=DEFAULT_PATH) => {
  const localConfig = require(localConfigPath)
  const config = new Config(localConfig)
  const app = express()
  const server = new Server(app, config)
  return server.start();
};

// from https://stackoverflow.com/a/6090287
if (require.main === module) {
  start()
    .catch((e) =>{
      console.error("Unable to start server:")
      console.error(e)
      process.exit(-1)
    })
}

module.exports = start
