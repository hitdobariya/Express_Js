const user = require('../user.json');

exports.getUser = (req, res) => {
    res.json(user);
};

exports.addUser = (req,res) => {
    user.push(req.body);
    res.json({message : 'user add successfully'});
};

exports.replaceUser = (req,res) => {
    let id = +req.params.id;
    let userIndex = user.findIndex((user) => user.id === id);
    user.splice(userIndex, 1, {...req.body});
    res.json({message : 'user replace successfully'});
};

exports.updateUser = (req,res) => {
    let id = +req.params.id;
    let userIndex = user.findIndex((user) => user.id === id);
    let users = user[userIndex];
    user.splice(userIndex, 1, {...users,...req.body});
    res.json({message : 'user update successfully'});
};

exports.deleteUser = (req,res) => {
    let id = +req.params.id;
    let userIndex = user.findIndex((user) => user.id === id);
    user.splice(userIndex , 1);
    res.json({message : 'user delete successfully'});
};

exports.getSingleUser = (req,res) => {
    let id = +req.params.id;
    let users = user.find((user) => user.id === id);
    res.json(users);
};