const User = require('../model/user.model');

exports.addUser = async (req, res) => {
    try {
        const { firstName, lastName, email, age, address } = req.body;
        let user = await User.findOne({ email: email });
        if (user) return res.status(400).json({ message: 'user already exist...' });
        user = await User.create({ firstName, lastName, email, age, address });
        user.save();
        res.status(201).json({ message: 'user added successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getUser = async (req, res) => {
    try {
        let user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getSingleUser = async (req, res) => {
    try {
        let user = await User.findOne({ _id: req.query.userId });
        if (!user) return res.status(404).json({ message: 'user not found...' });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        let user = await User.findById(req.query.id);
        if (!user) return res.status(404).json({ message: 'user not found...' });
        // user = await User.updateOne({ _id: req.query.id }, { $set: req.body }, { new: true });
        // user = await User.findByIdAndDelete(req.query.id, { $set: req.body }, { new: true });
        res.status(200).json({ message: 'user update successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let user = await User.findById(req.query.id);
        if (!user) return res.status(404).json({ message: 'user not found...' });
        // user = await User.deleteOne({ _id: req.query.id });
        // user = await User.findByIdAndDelete(user._id);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};