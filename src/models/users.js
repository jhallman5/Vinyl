const User = require('./db/users')

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
            album_id: review.album_id,
            content: review.content,
            created_on: review.created_on
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
