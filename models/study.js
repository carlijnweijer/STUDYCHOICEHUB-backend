"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class study extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      study.hasMany(models.review);
      study.hasMany(models.study_story);
    }
  }
  study.init(
    {
      crohoSector: DataTypes.STRING,
      isCurrent: DataTypes.BOOLEAN,
      rowkey: DataTypes.STRING,
      titleEn: DataTypes.STRING,
      titleNL: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "study",
    }
  );
  return study;
};
