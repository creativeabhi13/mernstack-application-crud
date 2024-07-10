const express = require("express"); 
const User = require("../models/users.js");
const router = express.Router();
const { createUser,getUsers,getUser,updateUser,deleteUser} = require("../controllers/userController.js");

// Add new user to the database
router.post("/createuser",createUser); 

// Get all users from the database
router.get("/",getUsers);

// Get user by id from the database
router.get("/:id",getUser);

// Update user by id in the database
router.put("/:id",updateUser);

// Delete user by id from the database
router.delete("/:id",deleteUser);


// Export the router
module.exports = router;    
