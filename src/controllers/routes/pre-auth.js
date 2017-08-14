const router = require('express').Router()
const Album = require('../../models/albums')
const Review = require('../../models/reviews')
const passport = require('../../auth/passport')

router.get('/', (req, res) => {
  Album.getAll()
    .then(albums =>
      Review.findThreeMostRecent()
        .then(reviews =>res.render('home', {albums, reviews}))
        .catch(error => res.status(500).render('error', {error})))
    .catch(error => res.status(500).render('error', {error}))
})

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

router.post('/sign-in', passport.authenticate('local', { successRedirect: '/',
                                                         failureRedirect: '/'})
)
module.exports = router
