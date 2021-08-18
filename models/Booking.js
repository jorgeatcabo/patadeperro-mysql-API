// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize")
// import our database connection from config.js
const sequelize = require("../config/connection")

// Initialize Product model (table) by extending off Sequelize's Model class
class Booking extends Model {}

// set up fields and rules for Product model
Booking.init(
  {
    // define columns
    hour: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date:{
      type:DataTypes.DATEONLY,
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
    modelName: "Booking",
  }
)

module.exports = Booking
