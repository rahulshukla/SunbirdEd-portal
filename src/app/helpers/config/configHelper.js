let configData = {}

/**
 * Get the given config value from 'configModel'
 * @param configKey name of the configuration to be read
 */
getConfig = function (configKey) {
  return configData[configKey]
}

/**
 * loads the given data into the configurations
 * @param configs list of configurations to be saved
 */
loadConfigData = function(configs){
  configData = configs
}

module.exports = {
  getConfig: getConfig,
  loadConfigData: loadConfigData
}
