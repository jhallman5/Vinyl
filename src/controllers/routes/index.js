const router = require('express').Router()
const preAuth = require('./pre-auth')
const users = require('./users')
const reviews = require('./reviews')
const albums = require('./albums')

router.use('/', preAuth)
router.use('/albums', albums)

router.use((req, res) => {
  res.status(404).render('not_found')
})

module.exports = router
