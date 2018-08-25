const extend = require('lodash/extend')
const defaults = require('lodash/defaults')

/*
 * default config values
 */
const defaultValues = {
  port: 3000
}

class Config {
  /**
   * @constructor
   * @param {object} localConfig the config values for this specific instance/machine
   * @param {object} localConfig.dbUsername required - the mongodb username 
   * @param {object} localConfig.dbPassword required - the mongodb password 
   * @param {object} [localConfig.port=3000] the port to run on
   */
  constructor (localConfig) {
    this._localConfig = localConfig;
    let defaulted = defaults({...localConfig}, defaultValues)
    extend(this, defaulted);
  }

  /**
   * @property defaults
   * @static
   * @readonly
   * the default values of the config object
   */
  static get defaults () {
    return defaultValues
  }
}

module.exports = Config
