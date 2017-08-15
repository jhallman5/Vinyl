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
        member_since: user[0].member_since,
        reviews: user.map(review => {
          return {
            id: review.id,
            name: review.name,
            title: review.title,
            album_id: review.album_id,
            content: review.content,
            created_on: moment(review.created_on).format("MMM Do YY")
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
  create,
}
