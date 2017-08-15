const knex = require('knex')(require('./knexfile'))

const findByEmail = (email) =>
  knex.first('*')
    .from('users')
    .where('email', email)

const findById = (id) =>
  knex.first('*')
    .from('users')
    .where('id', id)

module.exports = {
  findByEmail,
  findById
}
