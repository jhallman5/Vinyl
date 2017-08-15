const User = require('./db/users')

const findByEmail = (email) =>
  User.findByEmail(email)

const findById = (id) =>
  User.findById(id)

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
