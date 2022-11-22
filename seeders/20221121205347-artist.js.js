'use strict';
const falso = require('@ngneat/falso')
const artists = [...Array(100)].map(() => ({
  name: `${falso.randFirstName()} ${falso.randLastName()}`,
  description: falso.randParagraph(),
  genre: falso.randLastName(),
  yearFormed: falso.randNumber({min: 1800, max: 2022}),
  numberOfAlbums: falso.randNumber({min:0, max: 100})
}))

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('artists', artists)
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('artists')
  }
};
