'use strict';

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
    await queryInterface.bulkInsert('Messages', [
       {
        content: 'Bonjour, comment tu vas ce matin ?',
        isRead: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
       },
      {
        content: 'Bonjour, comment tu vas ce matin ?',
        isRead: false,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Salut, prêt pour la réunion ?',
        isRead: true,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Il fait beau aujourd\'hui !',
        isRead: false,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'As-tu reçu mon dernier email ?',
        isRead: true,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'N\'oublie pas notre rendez-vous.',
        isRead: false,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Quelles sont tes disponibilités cette semaine ?',
        isRead: true,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'J\'ai une question sur le projet.',
        isRead: false,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Merci pour ton aide !',
        isRead: true,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Peux-tu m\'envoyer les documents ?',
        isRead: false,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Super, on se voit demain !',
        isRead: true,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: 'Il faut discuter des prochaines étapes.',
        isRead: false,
        userId: 1,
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
    await queryInterface.bulkDelete('Messages', null, {});
  }
};

