const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('*')
    .from('reviews')

module.exports = {
  getAll
}
