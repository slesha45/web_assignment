const userModel = require('../models/userModel');
const { response } = require("express");
const { checkout } = require("../routes/userRoutes");



const createUser = async (req, res) => {

    // Step 1. Check incoming data
    console.log(req.body);

    // Step 2. De-structure the incoming data
    const{Name, Phone, email, } = req.body;


    // Step 3. Validation (Validate the data)(if empty, stop the process and send response)
    if(!Name || !Phone || !email ){
        // res.send('Please fill all details')
        // res.status(400).json()
        return res.json({
            'sucess' : false,
            'message' : 'Plz enter all details!'
        })

    }



    // Step 4. Error Handling (Try Catch)
    try {
    // Step 5. Check if the user is already in the database (registered)
    const existingUser = await userModel.findOne({Phone : Phone})
   
    // Step 5.1 If user Found: Send response 
     if(existingUser){
        return res.json ({
            'status' : false,
            'message' : 'User Already Exist!'
        })
     }
    // Step 5.1.1 Stop the process
    //Done

    // Hashing/Encryption of the password
    


    // Step 5.2 if user is new:
    const newUser = new userModel({
        // Database Fields : Client's Value
        Name : Name,
        Phone : Phone,
        email : email,
        
    })

    // Save the database
    await newUser.save();

    // Send the response
    res.json({
        'sucess' : true,
        'message' : 'User Created Sucesfully' ,
        user: newUser
    })


    // Step 5.2.1 Hash the password
    // Step 5,2,2 Save to the database 
    // 5.2.3 Send Sucessfull response

        
    } catch (error) {
        console.log(error)
        res.json({
            'sucess' : false,
            "message" : 'Internal Server Error!'
        })
        
    }
    

   

}






//exporting
module.exports = {
    createUser
}