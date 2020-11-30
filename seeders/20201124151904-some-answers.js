"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("answers", [
      {
        content:
          "I would say it depends on the subject. Teachers try and incorporate practice, but for some subjects you'll have to learn and study theory.",
        userId: 2,
        questionId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "The average is 30 when you start I think, after a year or so there'll be 23 left",
        userId: 3,
        questionId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "I liked being in a student association because I didn't know anyone in this study and in this city when I first moved here. You'll have friends for outside of class super fast.",
        userId: 2,
        questionId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        content:
          "Definitely, some subjects are a lot to study. A lot of people fail because they don't start early enough. I would say start early and ask questions while you can, make sure you really understand the material!",
        userId: 2,
        questionId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("answers", null, {});
  },
};
