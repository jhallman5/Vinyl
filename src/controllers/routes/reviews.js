const router = require('express').Router()
const Review = require('../../models/reviews')

// router.delete(':albumId/reviews/:id', (req, res) => {
//   Review.obliterate(req.params.id)
//     .then( () => res.redirect(`/albums/${req.params.id}`))
// })

module.exports = router
