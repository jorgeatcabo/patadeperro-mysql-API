// import models
const ActivityHour = require('./ActivityHour');
const Booking = require('./Booking')
const Activity = require('./Activity');

// ActivityHour belongsTo Activity
ActivityHour.belongsTo(Activity, {
  foreignKey: 'activity_id',
});

Booking.belongsTo(Activity, {
  foreignKey: 'activity_id',
});


// Activities have many ActivityHour
Activity.hasMany(ActivityHour, {
  foreignKey: 'activity_id',
  onDelete: 'CASCADE',
});

Activity.hasMany(Booking, {
  foreignKey: 'activity_id',
  onDelete: 'CASCADE',
});


module.exports = {
  ActivityHour,
  Activity,
  Booking
};
