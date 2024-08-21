const jwt = require('jsonwebtoken');
const User = require('../model/user.model');

exports.verifyToken = async (req, res, next) => {
    try {
        let authorization = req.headers['authorization'];
        if (!authorization) return res.json({ message: 'not authorized...' });
        // console.log(authorization);
        let token = authorization.split(" ")[1];
        // console.log(token);
        let payload = await jwt.verify(token, process.env.JWT_SECRET);
        if (!payload) return res.status(400).json({ message: 'unauthorized...' });
        let user = await User.findOne({ _id: payload.userId, isDelete: false });
        if (!user) return res.status(404).json({ message: 'user not found...' });
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' })
    }
};