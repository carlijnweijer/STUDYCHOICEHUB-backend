"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  question.init(
    {
      content: { type: DataTypes.TEXT, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      studyId: { type: DataTypes.INTEGER, allowNull: false },
      schoolId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "question",
    }
  );
  return question;
};
