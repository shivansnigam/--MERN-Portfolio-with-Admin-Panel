const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// Get all users logic
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
}

// single user  logic
const getUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
       const data =   await User.findOne({_id: id} , { password: 0 })
        return res.status(200).json(data);
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
};

// user edit logic
const updateUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne({_id:id},
            {
                $set:updatedUserData,
                
            }
            );
            return res.status(200).json(updatedData)
    } catch (error) {
        next(error)
    }
}



// user delete logic
const deleteUsersById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "User Deleted Successfully" });
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
};

// Get all contacts logic
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error); // Pass the error to the next middleware
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUsersById,getUserById,updateUserById };
