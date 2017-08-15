const Review = require('./db/reviews')
const moment = require('moment')

const findThreeMostRecent = () =>
  Review.getAll()
    .then(reviews => {
      reviews.forEach(review => review.created_on = moment(review.created_on).format("MMM Do YY"))
      return reviews.filter((review, index) => index < 3)
    })
    .catch(error => {
      console.log('Error in model')
      throw error
    })

const obliterate = (id) =>
  Review.obliterate(id)

module.exports = {
  findThreeMostRecent,
  obliterate,
}
