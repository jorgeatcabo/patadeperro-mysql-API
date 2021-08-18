const { Activity } = require('../models');

const activityData = [
  {
    activity_name: 'Massage',
  },
  {
    activity_name: 'Aromatherapy',
  },
  {
    activity_name: 'Surfing',
  },
  {
    activity_name: 'Piramids',
  },
  {
    activity_name: 'Cenotes',
  },
  {
    activity_name: 'Thermal strings',
  },
  {
    activity_name: 'Water scooter',
  },
  {
    activity_name: 'Snorkeling',
  },
  {
    activity_name: 'Mindfulness and Yoga',
  },
  {
    activity_name: 'Cold bath',
  },
];

const seedActivities = () => Activity.bulkCreate(activityData);

module.exports = seedActivities;
