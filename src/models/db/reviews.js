const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('*')
    .from('reviews')
    .leftOuterJoin('users', 'reviews.user_id', 'users.id')
    .leftOuterJoin('albums', 'reviews.album_id', 'albums.id')
    .orderBy('created_on', 'desc')

const obliterate = (id) =>
  knex('reviews')
    .where('id', id)
    .del()

module.exports = {
  getAll,
  obliterate
}
