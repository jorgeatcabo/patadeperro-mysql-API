const { ActivityHour } = require('../models');

const activityHourData = [
  {
    hour: '09:00 AM',
    activity_id: 1,
  },
  {
    hour: '10:00 AM',
    activity_id: 1,
  },
  {
    hour: '11:00 AM',
    activity_id: 1,
  },
  {
    hour: '12:00 PM',
    activity_id: 1,
  },
  {
    hour: '01:00 PM',
    activity_id: 1,
  },
];

const seedActivityHourData = () => ActivityHour.bulkCreate(activityHourData);

module.exports = seedActivityHourData;
