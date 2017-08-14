const Review = require('./db/reviews')

const findThreeMostRecent = () =>
  Review.getAll()
    .then(reviews => reviews.filter((review, index) => index < 3))
    .catch(error => {
      console.log('Error in model')
      throw error
    })

module.exports = {
  findThreeMostRecent,
}
