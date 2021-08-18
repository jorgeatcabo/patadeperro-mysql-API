const router = require('express').Router();
const { Activity, ActivityHour } = require('../../models');

// The `/api/activities` endpoint

router.get('/', async (req, res) => {
  // find all activities
  // be sure to include its associated ActivityHours
  try {
    const activityData = await Activity.findAll({
      include: [{ model: ActivityHour } ],
    });
    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:activity_name', async (req, res) => {
  // find one activity by its `id` value
  // be sure to include its associated ActivityHours
  try {
    const activityData = await Activity.findOne({ where: { activity_name: req.params.activity_name },
       include: [{ model: ActivityHour }], 
      },
    );

    if (!activityData) {
      res.status(404).json({ message: 'No activity found with that id!' });
      return;
    }

    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }  
});

// router.post('/', async (req, res) => {
//   // create a new activity
//     try {
//       const activityData = await activity.create({
//         activity_name: req.body.activity_name,
//       });
//       res.status(200).json(activityData);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// router.put('/:id', async (req, res) => {
//   // update a activity by its `id` value
//   try {
//     const activityData = await activity.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!activityData[0]) {
//       res.status(404).json({ message: 'No activity with this id!' });
//       return;
//     }
//     res.status(200).json(activityData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;
