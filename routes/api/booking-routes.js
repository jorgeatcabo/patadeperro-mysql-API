const router = require('express').Router();
const { Booking } = require('../../models');

// The `/api/booking` endpoint

router.get('/', async (req, res) => {
  // find all activities
  // be sure to include its associated BookingHours
  try {
    const bookingData = await Booking.findAll();
    res.status(200).json(bookingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:date/:activity_id', async (req, res) => {
  // find one Booking by its `id` value
  // be sure to include its associated BookingHours
  try {
    const bookingData = await Booking.findAll({ where: { date: req.params.date, activity_id: req.params.activity_id }});

    if (!bookingData) {
      res.status(404).json({ message: 'No Booking found with that id!' });
      return;
    }

    res.status(200).json(bookingData);
  } catch (err) {
    res.status(500).json(err);
  }  
});

router.post('/', async (req, res) => {
  // create a new Booking
    try {
      const bookingData = await Booking.create({
        hour: req.body.hour,
        date: req.body.date,
        activity_id: req.body.activity_id,
      });
      res.status(200).json(bookingData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

// router.put('/:id', async (req, res) => {
//   // update a Booking by its `id` value
//   try {
//     const bookingData = await Booking.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (!bookingData[0]) {
//       res.status(404).json({ message: 'No Booking with this id!' });
//       return;
//     }
//     res.status(200).json(bookingData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;
