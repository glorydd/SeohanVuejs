'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  host: 'http://minssan9.seohan.com', // can be overwritten by process.env.HOST

  // Various Dev Server settings
  port: 8091, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined

})
