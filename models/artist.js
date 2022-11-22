'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Artist.hasMany(models.Albums, {
        foreignKey: 'album_id',
        as: 'album',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        createdAt: new Date()
      })
      Artist.hasMany(models.Songs, {
        foreignKey: 'song_id',
        as: 'song',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        createdAt: new Date()
      })
    }
  }
  Artist.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    genre: DataTypes.STRING,
    yearFormed: DataTypes.INTEGER,
    numberOfAlbums: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Artist',
    tableName: 'artists'
  });
  return Artist;
};