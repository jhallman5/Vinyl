const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./controllers/routes')

const port = process.env.PORT || 3000

const server = express()

require('ejs')
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended: false}))

server.use(router)

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
