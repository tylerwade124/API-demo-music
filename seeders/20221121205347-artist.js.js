'use strict';
const falso = require('@ngneat/falso')
const artists = [...Array(100)].map(() => ({
  name: `${falso.randFirstName()} ${falso.randLastName()}`,
  description: null,
  genre: falso.randLastName(),
  yearFormed: falso.randNumber({min: 1800, max: 2022}),
  numberOfAlbums: falso.randNumber({min:0, max: 100}),
  createdAt: new Date,
  updatedAt: new Date
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('artists', artists)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('artists', null, {})
  }
};
