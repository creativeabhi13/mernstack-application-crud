const mongoose = require("mongoose");

// create a schema for the users
const UserSchema = new mongoose.Schema(
    {
        // define the properties of the schema
        name:{
            type:String,
            required:[true,"Please provide your name"]
        },
        email:{
            type:String,
            required:[true,"Please provide your email"],
            unique:true
        },
        password:{
            type:String,
            required:[true,"Please provide your password"]
        },
        role:{
            type:String,
            enum:["user","admin"],
            default:"user",
         
        },
        // resetPasswordToken:String,
        // resetPasswordExpire:Date
        
    },

        
    {
        // define the timestamps
        timestamps:true
    },
);

// create a model for the users
const Users = mongoose.model("Users",UserSchema);
// export the model
module.exports = Users;