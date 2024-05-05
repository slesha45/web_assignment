const mongoose = require('mongoose');

const appointmentControllers = new mongoose.Schema({

    Date: {
        type: String,
        required: true
    },
    Time: {
        type: String,
        required: true
    }
})


const Appointment = mongoose.model('appointment', appointmentControllers)
module.exports = Appointment;