'use strict';

/* 
  Database migration seeder file for Users
*/

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        username: 'user',
        password: '$10$ab29792Ckj8FsyZg6a7i6uEwZpvL9.4j5W7IGk3GiDT0SxMv1Wq4K',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
