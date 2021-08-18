// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize")
// import our database connection from config.js
const sequelize = require("../config/connection")

// Initialize Product model (table) by extending off Sequelize's Model class
class ActivityHour extends Model {}

// set up fields and rules for Product model
ActivityHour.init(
  {
    // define columns
    hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'activity',
        key: 'id',
      },
    },    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "ActivityHour",
  }
)

module.exports = ActivityHour
