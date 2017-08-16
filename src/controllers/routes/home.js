const router = require('express').Router()
const Album = require('../../models/albums')
const Review = require('../../models/reviews')
const User = require('../../models/users')
const passport = require('../../auth/passport')

router.get('/', (req, res) => {
  Album.getAll()
    .then(albums =>
      Review.findThreeMostRecent()
        .then(reviews => res.render('home', {albums, reviews, session: req.session.passport}))
        .catch(error => res.status(500).render('error', {error})))
    .catch(error => res.status(500).render('error', {error}))
})

router.get('/sign-up', (req, res) => {
  res.render('sign-up')
})

router.post('/sign-up', (req, res, next) => {
  const {name, email, password} = req.body
  User.create(name, email, password)
    .then(user => {
      req.login(user, function(error) {
        if (error) return next(error)
        res.redirect('/users/profile');
       })
    })
    .catch(error => res.status(500).render('error', {error}))
})

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

router.post('/sign-in', (req, res) => {
  passport.authenticate('local', { successRedirect: '/users/profile', failureRedirect: '/sign-in' })(req, res)
})

module.exports = router
