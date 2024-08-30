const User = require('../model/user.model');
const bcrypt = require('bcrypt');

exports.Registration = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDeleted: false });
        if (user) {
            return res.status(400).render('register').send({ message: 'user already exist...' });
        }
        let hashpasssword = await bcrypt.hash(req.body.password, 10);
        user = await User.create({ ...req.body }, { password: hashpasssword });
        res.status(201).redirect("login");
    } catch (error) {
        console.log(error);
        res.status(500).redirect('register');
    }
};

exports.logout = async (req, res) => {
    try {
        req.logout((err) => {
            if (err) return next(err);
            res.redirect('/login');
        });
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: 'internal server error...' });
    }
}

exports.todolist = async (req, res) => {
    try {
        let users = await User.find({ isDeleted: false });
        if (users.length > 0) {
            return res.render('todolist', { users });
        } else {
            res.status(400).send("No users found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal Server error" });
    }
}