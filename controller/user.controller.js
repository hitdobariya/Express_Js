const User = require('../model/user.model');

exports.addUser = async (req, res) => {
    try {
        const { firstName, lastName, email, age, address } = req.body;
        let user = await User.findOne({ email: email });
        if (user) return res.status(400).json({ message: 'user already exist...' });
        user = await User.create({ firstName, lastName, email, age, address });
        user.save();
        res.status(201).json({ message: 'user added successfully' });
    } catch {
        res.status(500).json({message : 'enternal server error'});
    }
};

exports.getUser = async (req,res) => {
    try{
        let user = await User.find();
        res.status(200).json(user);
    } catch {
        res.status(500).json({message : 'enternal server error'});
    }
};