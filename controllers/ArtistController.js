const { Artist } = require('../models')

const FindAllArtist = async (req, res) => {
  try {
    const result = await Artist.findAll()
    res.send(result)
  } catch (error) {
    throw error
  }
}

const CreateArtist = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    let artistBody = {artistId, ...req.body}
    let artist = await Artist.create(artistBody)
    res.send(artist)
  } catch (error) {
    throw error
  }
}

const UpdateArtist = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    let updatedArtist = await Artist.update(req.body, {
        where: {id: artistId},
        returning: true
    })
    res.send(updatedArtist)
  } catch (error) {
    throw error
  }
}

const DeleteArtist = async (req, res) => {
  try {
    let artistId = parseInt(req.params.artist_id)
    await Artist.destroy({where:{id:artistId}})
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateArtist,
  FindAllArtist,
  UpdateArtist,
  DeleteArtist
}
