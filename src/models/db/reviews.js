const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('name', 'user_id', 'reviews.id AS review_id', 'title', 'album_id', 'content', 'created_on')
    .from('reviews')
    .leftOuterJoin('users', 'reviews.user_id', 'users.id')
    .leftOuterJoin('albums', 'reviews.album_id', 'albums.id')
    .orderBy('created_on', 'desc')

const obliterate = (id) =>
  knex('reviews')
    .where('id', id)
    .del()

const create = (userId, albumId, content) =>
  knex('reviews')
    .insert({user_id: userId, album_id: albumId, content})

module.exports = {
  getAll,
  obliterate,
  create,
}
