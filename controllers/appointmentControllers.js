const appointmentModel = require('../models/appointmentModel');
const { response } = require("express");
const { checkout } = require("../routes/userRoutes");



const bookAppointment = async (req, res) => {

    // Step 1. Check incoming data
    console.log(req.body);

    // Step 2. De-structure the incoming data
    const { Date, Time, } = req.body;


    // Step 3. Validation (Validate the data)(if empty, stop the process and send response)
    if (!Date || !Time) {
        // res.send('Please fill all details')
        // res.status(400).json()
        return res.json({
            'sucess': false,
            'message': 'Plz enter all details!'
        })

    }

    if (Time === '15:00') {
        return res.json({ success: false, message: 'The slot is unavailable.' });
    }



    // Step 4. Error Handling (Try Catch)
    try {
        // Step 5. Check if the user is already in the database (registered)
        const newAppointment = await appointmentModel.findOne({ Date: Date, Time: Time })

        // Step 5.1 If user Found: Send response 
        if (newAppointment) {
            return res.json({
                'status': false,
                'message': 'Booking Already Exist!'
            })
        }
        // Step 5.1.1 Stop the process
        //Done

        // Hashing/Encryption of the password



        // Step 5.2 if user is new:
        const newappointment = new appointmentModel({
            // Database Fields : Client's Value
            Date: Date,
            Time: Time,


        })

        // Save the database
        await newappointment.save()

        // Send the response
        res.json({
            'sucess': true,
            'message': 'Booking Confirmed'
        })


        // Step 5.2.1 Hash the password
        // Step 5,2,2 Save to the database 
        // 5.2.3 Send Sucessfull response


    } catch (error) {
        console.log(error)
        res.json({
            'sucess': false,
            "message": 'Internal Server Error!'
        })

    }




}






//exporting
module.exports = {
    bookAppointment
};