const express = require('express')
const path = require('path')

const Config = require('./Config')
const Server = require('./Server')

const start = (localConfigPath) => {
  const localConfig = require(localConfigPath)
  const config = new Config(localConfig)
  const app = express()
  const server = new Server(app, config)
  server.start();
};

// from https://stackoverflow.com/a/6090287
if (require.main === module) {
  const localConfigPath = path.resolve(__dirname, '../localConfig.json')
  start(localConfigPath);
}

module.exports = start;
