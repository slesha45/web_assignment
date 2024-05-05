const router = require('express').Router();
const appointmentControllers = require('../controllers/appointmentControllers')


// Creating user registration route
router.post('/book', appointmentControllers.bookAppointment)


// exporting the router
module.exports = router;