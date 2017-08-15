const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const router = require('./controllers/routes')
const methodOverride = require('method-override')
const {passport} = require('./auth/passport')

const port = process.env.PORT || 3000

const server = express()

require('ejs')
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(methodOverride('_method'))
server.use('/bulma', express.static('node_modules/bulma/css'))
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({extended: false}))
server.use(session({
  secret:'PICKLERICK!',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))
server.use(passport.initialize())
server.use(passport.session())

server.use(router)

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
