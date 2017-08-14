const knex = require('knex')(require('./knexfile'))

const getAll = () =>
  knex.select('*')
    .from('reviews')
    .leftOuterJoin('users', 'reviews.user_id', 'users.id')
    .leftOuterJoin('albums', 'reviews.album_id', 'albums.id')
    .orderBy('created_on', 'desc')

module.exports = {
  getAll
}
