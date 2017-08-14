const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('*')
    .from('albums')

const findById = (id) =>
  knex.first('*')
    .from('albums')
    .where('id', id)

module.exports = {
  getAll,
  findById
}
