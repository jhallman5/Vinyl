const Album = require('./db/albums')

const getAll = () =>
  Album.getAll()

const findById = (id) =>
  Album.findById(id)

module.exports = {
  getAll,
  findById
}
