const router = require('express').Router();
const activityRoutes = require('./activity-routes');
const activityHourRoutes = require('./activity-hour-routes');

router.use('/activities', activityRoutes);
router.use('/activitiesHours', activityHourRoutes);

module.exports = router;
