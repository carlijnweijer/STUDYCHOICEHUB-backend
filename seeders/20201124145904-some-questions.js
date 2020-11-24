"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("questions", [
      {
        content: "what is the ratio between theory and practice?",
        userId: 1,
        studyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "how many people are in one class/group?",
        userId: 4,
        studyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content: "is it a good idea to join a student association?",
        userId: 1,
        studyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "Are there certain 'stumbling blocks' that are difficult? Do you have any tips on how to achieve them?",
        userId: 4,
        studyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
