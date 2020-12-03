"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.com",
          password: "john123",
          role: "scholar",
          level: "havo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "jane@doe.com",
          password: "jane123",
          role: "student",
          level: "hbo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Jan",
          lastName: "Janssen",
          email: "jan@janssen.com",
          password: "jan123",
          role: "student",
          level: "wo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Pieter",
          lastName: "Pietersen",
          email: "pieter@pietersen.com",
          password: "pieter123",
          role: "scholar",
          level: "vwo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
