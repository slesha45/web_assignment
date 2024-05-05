const mongoose = require('mongoose');

const userControllers = new mongoose.Schema({
    Name : {
        type : String,
        required : true,
        
    },
    Phone: {
        type : String,
        required : true,
        unique : true

    },

    email : {
        type : String,
        required : true,
        
    },

    
})

const User = mongoose.model('user', userControllers)
module.exports = User;

