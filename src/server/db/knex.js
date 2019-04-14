const environment = process.env.NODE_ENV || 'production'
const config = require('./knexfile')[environment]
module.exports = require('knex')(config)
