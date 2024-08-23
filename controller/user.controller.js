const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.userLogin = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (!user) return res.status(404).json({ message: 'user not found...' });
        let matchpassword = await bcrypt.compare(req.body.password, user.password);
        if (!matchpassword) return res.status(400).json({ message: 'email or password incorrect...' });
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        // console.log(token);      
        res.status(200).json({ message: 'login successs...', token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.userRegistration = async (req, res) => {
    try {
        let imagepath = "";
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) {
            return res.status(400).json({ message: 'user already exists...' });
        }
            if (req.file) { imagepath = req.file.path.replace(/\\/g, '/') };
            let hashpasssword = await bcrypt.hash(req.body.password, 10);
            user = await User.create({ ...req.body, password: hashpasssword , profileImage: imagepath });
            res.status(201).json({ message: 'user registration successfully...' });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.userProfile = async (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getUser = async (req, res) => {
    try {
        let user = await User.find({ isDelete: false });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let user = req.user;
        let imagepath = '';
        if (req.file) { imagepath = req.file.path.replace(/\\/g, '/') };
        user = await User.findByIdAndUpdate(user._id, { $set: req.body }, { new: true });
        res.status(200).json({ user, message: 'user update successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { currentpassword, newpassword, confirmpassword } = req.body;
        let user = req.user;
        if (!currentpassword || !newpassword || !confirmpassword) return res.json({ message: 'provide all passwords...' });
        if (newpassword !== confirmpassword) return res.json({ message: 'confirmpassword not matched...' });
        let matchpassword = await bcrypt.compare(currentpassword, user.password);
        if (!matchpassword) return res.status(400).json({ message: 'Incorrect currentpassword...' });
        let hashpasssword = await bcrypt.hash(newpassword, 10);
        user = await User.findByIdAndUpdate(user._id, { $set: { password: hashpasssword } }, { new: true });
        res.status(200).json({ message: 'password changed successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

// --- hard delete
// exports.deleteUser = async (req, res) => {
//     try {
//         let user = await User.findById(req.query.id);
//         if (!user) return res.status(404).json({ message: 'user not found...' });
//         // user = await User.deleteOne({ _id: req.query.id });
//         // user = await User.findByIdAndDelete(user._id);
//         // res.status(200).json({ message: 'user deleted successfully...' });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'internal server error...' });
//     }
// };

// --- soft delete
exports.deleteUser = async (req, res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndUpdate(user._id, { $set: { isDelete: true } }, { new: true });
        res.status(200).json({ message: 'user deleted successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};