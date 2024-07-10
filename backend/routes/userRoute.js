const express = require("express"); 
const User = require("../models/users.js");
const router = express.Router();
const { createUser,getUsers,getUser} = require("../controllers/userController.js");

// Add new user to the database
router.post("/createuser",createUser); 

// Get all users from the database
router.get("/",getUsers);

// Get user by id from the database
router.get("/:id",getUser);




// Export the router
module.exports = router;    
