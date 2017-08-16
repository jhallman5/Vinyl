// Used to generate hashed passwords for seed data

const bcrypt = require('bcrypt')

const password = 'banana'

bcrypt.hash( password, 12 )
  .then( hash => console.log('hashed password for ' +  password + ' is: ' + hash ))
  .catch( error => console.log('bcrypt error ---> ' + error ))
