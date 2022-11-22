const { Albums } = require('../models')

const FindAllAlbums = async (req, res) => {
    try {
      const result = await Albums.findAll()
      res.send(result)
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    // CreateArtist,
    FindAllAlbums,
    // UpdateArtist,
    // DeleteArtist
  }
  