const {CracoAliasPlugin} = require('react-app-alias')
const loadWebPackConfig = require('./craco.webpack');

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {}
    },
    {
      plugin: loadWebPackConfig
    }
  ]
}