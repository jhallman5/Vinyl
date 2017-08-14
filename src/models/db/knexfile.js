const pg = require('pg')
const dbName = 'vinyl'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`

module.exports = {
  client: 'pg',
  connection: connectionString,
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
}
