const User = require("../models/users.js");


// get user by id from the database
const getUser = async (req,res) =>{
  try {
    const {id} = req.params;
    const user = await User.findById(id);
    res.status(200).json({ user });
  }catch (error){
    res.status(500).json({message: error.message});
  }
}


// get all users from the database
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userData = await user.save();
    res.status(200).json({ user });
    res.send(userData);
  } catch (error) {
    res.status(500).json({ message: error.message });
    res.send("500", error.message);
  }
};

module.exports = {
 createUser,
getUsers,
getUser
};
