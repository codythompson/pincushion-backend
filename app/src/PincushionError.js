class PincushionError extends Error {
  constructor(message, functionName=null, moduleName=null) {
    let moduleStr = ''
    let functionStr = ''
    if (moduleName !== null) {
      moduleStr = `[${moduleName}]`
    }
    if (functionName !== null) {
      functionStr = `[${functionName}]`
    }
    super(`[pincushion]${moduleStr}${functionStr} ${message}`)
    this.moduleName = moduleName
    this.functionName = functionName
  }
}

module.exports = PincushionError
