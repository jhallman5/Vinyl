const Review = require('./db/reviews')
const moment = require('moment')

const findThreeMostRecent = () =>
  Review.getAll()
    .then(reviews => {
      reviews.forEach(review => {
        review.id = review.review_id
        review.created_on = moment(review.created_on).format("MMM Do YYYY")
      })
      return reviews.filter((review, index) => index < 3)
    })
    .catch(error => {
      console.log('Error in model')
      throw error
    })

const obliterate = (id) =>
  Review.obliterate(id)

const create = (userId, albumId, content) =>
  Review.create(userId, albumId, content)

module.exports = {
  findThreeMostRecent,
  obliterate,
  create,
}
