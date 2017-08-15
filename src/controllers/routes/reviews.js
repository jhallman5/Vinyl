const router = require('express').Router()
const Review = require('../../models/reviews')

router.delete('/:id', (req, res) => {
  Review.obliterate(req.params.id)
    .then( () => res.redirect('back'))
})

module.exports = router
