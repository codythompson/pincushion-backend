const Express = function () {
}
Express.prototype.listen = jest.fn(function () {
  return {
    close: jest.fn()
  }
})


module.exports = Express