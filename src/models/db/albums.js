const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('*')
    .from('albums')

const findById = (id) =>
  knex.select('name',
  'user_id', 'reviews.id AS review_id', 'title', 'album_id', 'content', 'created_on', 'artist')
    .from('albums')
    .where('albums.id', id)
    .leftOuterJoin('reviews', 'albums.id', 'reviews.album_id')
    .leftOuterJoin('users', 'reviews.user_id', 'users.id')
    .orderBy('created_on', 'desc')

module.exports = {
  getAll,
  findById
}
