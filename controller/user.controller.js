const User = require('../model/user.model');

exports.getUser = async (req, res) => {
    try {
        res.json(User);
    } catch {
        res.status(500);
    }
};

exports.addUser = async (req, res) => {
    try{
    let user = await User.create({...req.body});
    user.save();
    res.json({ message: 'user add successfully' });
    } catch {
        res.status(500);
    }
};

// exports.replaceUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = user.findIndex((user) => user.id === id);
//     user.splice(userIndex, 1, { ...req.body });
//     res.json({ message: 'user replace successfully' });
// };

// exports.updateUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = user.findIndex((user) => user.id === id);
//     let users = user[userIndex];
//     user.splice(userIndex, 1, { ...users, ...req.body });
//     res.json({ message: 'user update successfully' });
// };

// exports.deleteUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = user.findIndex((user) => user.id === id);
//     user.splice(userIndex, 1);
//     res.json({ message: 'user delete successfully' });
// };

// exports.getSingleUser = (req, res) => {
//     let id = +req.params.id;
//     let users = user.find((user) => user.id === id);
//     res.json(users);
// };