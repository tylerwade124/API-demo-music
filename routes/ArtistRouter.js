const Router = require('express').Router()
const controller = require('../controllers/ArtistController')

Router.get('/', controller.FindAllArtist)
Router.post('/:artist_id', controller.CreateArtist)
Router.put('/:artist_id', controller.UpdateArtist)
Router.delete('/:artist_id', controller.DeleteArtist)

module.exports = Router