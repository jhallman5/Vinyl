const router = require('express').Router()
const home = require('./home')
const users = require('./users')
const albums = require('./albums')

router.use('/', home)
router.use('/albums', albums)
router.use('/users', users)

router.use((req, res) => {
  res.status(404).render('not_found')
})

module.exports = router
