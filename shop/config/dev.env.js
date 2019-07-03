'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
<<<<<<< HEAD
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8080"'
=======
  NODE_ENV: '"development"'
>>>>>>> gouqun1
})
