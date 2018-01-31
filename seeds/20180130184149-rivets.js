'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Rivets', [
        {
            title: "Monel",
            summary: "Monel are rivets",
            description: "Monel are some really cool rivets.. that work... most of the time.",
            createdAt : new Date(),
            updatedAt : new Date()

        }, {
            title: "Aluminum",
            summary: "Aluminum are rivets",
            description: "Aluminum are some really cool rivets.. that work... most of the time.",
            createdAt : new Date(),
            updatedAt : new Date()

        }, {
            title: "Stainless Steel",
            summary: "Stainless Steel are rivets",
            description: "Stainless Steel are some really cool rivets.. that work... most of the time.",
            createdAt : new Date(),
            updatedAt : new Date()

        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
     return queryInterface.bulkDelete('Rivets', null, [{
         title: "Monel"
     }])
  }
};
