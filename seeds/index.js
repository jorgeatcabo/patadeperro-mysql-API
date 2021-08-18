const sequelize = require('../config/connection');
const seedActivityHourData = require('./activity-hour-seeds');
const seedActivities = require('./activity-seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedActivities();
  console.log('\n----- ACTIVITIES SEEDED -----\n');

  await seedActivityHourData();
  console.log('\n----- ACTIVITIES HOURS SEEDED -----\n');

  process.exit(0);
};

seedAll();
