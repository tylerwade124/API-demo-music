'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Albums.belongsTo(models.Artist, {
        foreignKey: "artist_id",
        as: "artist",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Albums.hasMany(models.Songs, {
        foreignKey: 'song_id',
        as: 'song',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Albums.init({
    name: DataTypes.STRING,
    artistName: DataTypes.STRING,
    description: DataTypes.STRING,
    releaseDate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Albums',
    tableName: 'albums'
  });
  return Albums;
};