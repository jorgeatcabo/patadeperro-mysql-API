const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Activity extends Model {}

Activity.init(
  {
    // define columns
    activity_name: {
    type: DataTypes.STRING,
    allowNull:false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'activity',
  }
);

module.exports = Activity;
