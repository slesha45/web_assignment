// importing the packages (express)
const express = require('express');
const mongoose = require('mongoose');
const connectDatabase = require('./database/database');
const dotenv = require('dotenv')


//Creating an express app 
const app = express();

app.use(express.json())

// dotenv configuration
dotenv.config()

//Connecting to database
connectDatabase()

// Defining the port  5000 to 6000
const PORT = process.env.PORT;

// Making a test endpoint
// Endpoints : POST, GET, PUT, DELETE
app.get('/test', (req, res) => {
    res.send("Test API is working")
})

//http://localhost:5000/test

// configuring ROutes of user 
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/appointment', require('./routes/appointmentRoutes'))
app.use('/api/reservation', require('./routes/reservationRoutes'))

// http://localhost:5000/api/user/create

// Starting the server 
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT} `)
})



