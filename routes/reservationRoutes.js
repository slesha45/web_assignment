const router = require('express').Router();
const reservationControllers = require("../controllers/reservationController")


// Creating user registration route
router.post('/create', reservationControllers.createReservation)


// exporting the router
module.exports = router;