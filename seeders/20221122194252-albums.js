'use strict';
const falso = require('@ngneat/falso')
const albums = [...Array(100)].map(() => ({
  name: falso.randLastName(),
  artistName: `${falso.randFirstName()} ${falso.randLastName()}`,
  description: null,
  releaseDate: falso.randNumber({min: 1800, max: 2022}),
  createdAt: new Date,
  updatedAt: new Date
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('albums', albums)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('albums', null, {})
  }
};