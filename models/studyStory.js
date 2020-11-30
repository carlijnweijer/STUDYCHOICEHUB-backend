"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class studyStory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      studyStory.belongsTo(models.user);
      studyStory.belongsTo(models.study);
    }
  }
  studyStory.init(
    {
      video: { type: DataTypes.STRING, allowNull: false, unique: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      studyId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "studyStory",
    }
  );
  return studyStory;
};
