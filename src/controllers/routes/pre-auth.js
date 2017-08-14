const router = require('express').Router()
const Album = require('../../models/albums')
const Review = require('../../models/reviews')

router.get('/', (req, res) => {
  Album.getAll()
    .then(albums =>
      Review.findThreeMostRecent()
        .then(reviews =>res.render('home', {albums, reviews}))
        .catch(error => res.status(500).render('error', {error})))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
