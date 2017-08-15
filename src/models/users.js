const User = require('./db/users')

const findByEmail = (email) =>
  User.findByEmail(email)

const findById = (id) =>
  User.findById(id)

const create = (name, email, password) =>{
  console.log( "=-=-=-> MODEL", name, email, password )
  return User.create(name, email, password)
}

module.exports = {
  findByEmail,
  findById,
  create,
}
