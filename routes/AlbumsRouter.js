const Router = require('express').Router()
const controller = require('../controllers/AlbumsController')

Router.get('/', controller.FindAllAlbums)


module.exports = Router