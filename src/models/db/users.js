const knex = require('knex')(require('./knexfile'))

const findByEmail = (email) =>
  knex.first('*')
    .from('users')
    .where('email', email)

const findById = (id) =>
  knex.first('*')
    .from('users')
    .where('id', id)

const create = (name, email, password) =>
  knex('users')
    .insert({email, name, password})
    .returning('id')


module.exports = {
  findByEmail,
  findById,
  create
}
