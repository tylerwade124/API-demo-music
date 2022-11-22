'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Songs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Songs.belongsTo(models.Albums, {
        foreignKey: "albums_id",
        as: "albums",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Songs.belongsTo(models.Artist, {
        foreignKey: "artist_id",
        as: "artist",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      })
    }
  }
  Songs.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    artistName: DataTypes.STRING,
    albumName: DataTypes.STRING,
    lyrics: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Songs',
    tableName: 'songs'
  });
  return Songs;
};