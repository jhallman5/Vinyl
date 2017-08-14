const router = require('express').Router()
const Album = require('../../models/albums')

router.get('/:albumID', (req, res) => {
  Album.findById(req.params.albumID)
    .then(album => res.render('album', {album, session: req.session.passport}))
    .catch(error => res.status(500).render('error', {error}))
})

module.exports = router
