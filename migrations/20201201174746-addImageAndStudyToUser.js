"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "users",
      "studyId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "studies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      {}
    );
    await queryInterface.addColumn(
      "users",
      "imageUrl",
      { type: Sequelize.STRING },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("users", "studyId", {});
    await queryInterface.removeColumn("users", "imageUrl", {});
  },
};
