'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('studies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      crohoSector: {
        type: Sequelize.STRING
      },
      isCurrent: {
        type: Sequelize.BOOLEAN
      },
      rowkey: {
        type: Sequelize.STRING
      },
      titleEn: {
        type: Sequelize.STRING
      },
      titleNL: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('studies');
  }
};