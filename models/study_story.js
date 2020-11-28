"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class study_story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      study_story.belongsTo(models.user);
      study_story.belongsTo(models.study);
    }
  }
  study_story.init(
    {
      video: { type: DataTypes.STRING, allowNull: false, unique: true },
      userId: { type: DataTypes.INTEGER, allowNull: false },
      studyId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "study_story",
    }
  );
  return study_story;
};
