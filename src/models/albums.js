const Album = require('./db/albums')
const moment = require('moment')

const getAll = () =>
  Album.getAll()

const findById = (id) =>
  Album.findById(id)
    .then( album => {
      return {
        id: album[0].album_id,
        title: album[0].title,
        artist: album[0].artist,
        reviews: album.map( review => {
          return {
            id: review.review_id,
            name: review.name,
            title: review.title,
            album_id: review.album_id,
            user_id: review.user_id,
            content: review.content,
            created_on: moment(review.created_on).format("MMM Do YYYY")
          }
        })
      }
    })
    .catch(error => {
      console.log('Error in model')
      throw error
    })

module.exports = {
  getAll,
  findById
}
