const router = require('express').Router();
const activityRoutes = require('./activity-routes');
const activityHourRoutes = require('./activity-hour-routes');
const bookings = require('./booking-routes');

router.use('/activities', activityRoutes);
router.use('/activitiesHours', activityHourRoutes);
router.use('/bookings', bookings);

module.exports = router;
