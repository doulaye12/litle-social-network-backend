'use strict';
const bcrypt = require('bcryptjs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
       {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.example@yopmail.com',
          password: bcrypt.hashSync('123456', 12),
          secret: 'NCDNCDNHFEIRHFDIMEUIU',
          isActive: false,
          createdAt: new Date(),
          updatedAt: new Date(),
      },
      {
        firstName: 'Alice',
        lastName: 'Smith',
        email: 'alice.smith@yopmail.com',
        password: bcrypt.hashSync('password123', 12),
        secret: 'XMKSAKJKNASLFIUHUIFRJN',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Bob',
        lastName: 'Johnson',
        email: 'bob.johnson@yopmail.com',
        password: bcrypt.hashSync('securePass456', 12),
        secret: 'PLSXMISNXJDSJAIYGFEUIK',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Charlie',
        lastName: 'Williams',
        email: 'charlie.williams@yopmail.com',
        password: bcrypt.hashSync('mySecret789', 12),
        secret: 'DHGMNIWENNSAUNLKFEIRO',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Diana',
        lastName: 'Brown',
        email: 'diana.brown@yopmail.com',
        password: bcrypt.hashSync('qwerty1234', 12),
        secret: 'LSDSJNODDEEOCNBVVWFJ',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
