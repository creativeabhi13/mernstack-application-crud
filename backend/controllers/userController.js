const User = require("../models/users.js");

// create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const userData = await user.save();
    res.status(200).json( userData);
    // res.send(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
    res.send("500", error.message);
  }
//   try{
// const data=req.body;
// const user = new User(data);
// const userData = await user.save();
// res.status(200).json(userData);
// // res.send("created data successfully");
// if(!userData){
//   res.status(400).json({message:"User not created"});
// }
//   }catch(error){
//     res.status(500).json({ message: error.message });
//   }
};

// get user by id from the database
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
    res.send("500", error.message);
  }
};

// get all users from the database
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user by id in the database
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updateUser = await User.findById(id);
    res.status(200).json(updateUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete user by id from the database
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export the functions

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
