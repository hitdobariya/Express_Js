const User = require('../model/user.model');

exports.addUser = async (req, res) => {
    try{
    let user = await User.create({...req.body});
    user.save();
    res.json({ message: 'user add successfully' });
    } catch {
        res.status(500);
    }
};