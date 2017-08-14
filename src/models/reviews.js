const Review = require('./db/reviews')

const findThreeMostRecent = () =>
  Review.getAll()
    .then(reviews => reviews.filter((review, index) => index < 3))

module.exports = {
  findThreeMostRecent,
}
