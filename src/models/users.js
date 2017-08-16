const User = require('./db/users')
const moment = require('moment')

const findByEmail = (email) =>
  User.findByEmail(email)

const findById = (id) =>
  User.findById(id)
    .then(user => {
      return {
        email: user[0].email,
        name: user[0].name,
        user_id: user[0].user_id,
        member_since: moment(user[0].member_since).format("MMM Do YYYY"),
        reviews: user.map(review => {
          return {
            id: review.review_id,
            name: review.name,
            user_id: review.user_id,
            title: review.title,
            album_id: review.album_id,
            content: review.content,
            created_on: moment(review.created_on).format("MMM Do YYYY")
          }
        })
      }
    })

const create = (name, email, password) =>
  User.create(name, email, password)
    .then(user =>  {
      return { id: user[0]}
    })

module.exports = {
  findByEmail,
  findById,
  create
}
