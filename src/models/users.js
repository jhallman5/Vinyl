const User = require('./db/users')

const findByEmail = (email) =>
  User.findByEmail(email)

const findById = (id) =>
  User.findById(id)

module.exports = {
  findByEmail,
  findById
}
