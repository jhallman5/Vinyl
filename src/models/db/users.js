const knex = require('knex')(require('./knexfile'))

const findByEmail = (email) =>
  knex.first('*')
    .from('users')
    .where('email', email)

const findById = (id) =>
  knex.select('*')
    .from('users')
    .where('users.id', id)
    .leftOuterJoin('reviews', 'users.id', 'reviews.user_id')
    .leftOuterJoin('albums', 'reviews.album_id', 'albums.id')

const create = (name, email, password) =>
  knex('users')
    .insert({email, name, password})
    .returning('id')


module.exports = {
  findByEmail,
  findById,
  create
}
