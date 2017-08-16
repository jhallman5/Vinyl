const knex = require('knex')(require('../models/db/knexfile'))
const User = require('../models/db/users')

const checkIfUserExists = (req, res, next) =>
  User.findByEmail(req.body.email)
    .then(user => {
      if(user) throw new Error("Email already in use!")
      next()
    })
    .catch( error => res.redirect('/sign-up'))

module.exports = {
  checkIfUserExists
}
