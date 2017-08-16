const knex = require('knex')(require('./knexfile'))

const findByEmail = (email) =>
  knex.first('*')
    .from('users')
    .where('email', email)

const findById = (id) =>
  knex.select('email', 'name',
  'user_id', 'member_since', 'reviews.id AS review_id', 'title', 'album_id', 'content', 'created_on')
    .from('users')
    .where('users.id', id)
    .leftOuterJoin('reviews', 'users.id', 'reviews.user_id')
    .leftOuterJoin('albums', 'reviews.album_id', 'albums.id')
    .orderBy('created_on', 'desc')

const create = (name, email, password) =>
  knex('users')
    .insert({email, name, password})
    .returning('id')

module.exports = {
  findByEmail,
  findById,
  create
}
