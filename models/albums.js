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