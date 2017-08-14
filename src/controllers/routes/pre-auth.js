const router = require('express').Router()
const Album = require('../../models/albums')

router.get('/', (req, res) => {
  Album.getAll()
    .then(albums => res.render('home', {albums}))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
