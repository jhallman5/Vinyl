const router = require('express').Router()
const Review = require('../../models/reviews')
const Album = require('../../models/albums')


router.get('/:albumID/new', (req, res) => {
  Album.findById(req.params.albumID)
    .then(album => res.render('review', {album, session: req.session.passport}))
    .catch(error => res.status(500).render('error', {error}))
})

router.delete('/:id', (req, res) => {
  Review.obliterate(req.params.id)
    .then( () => res.redirect('back'))
})

module.exports = router
