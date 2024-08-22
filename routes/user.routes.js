const express = require('express');

const userRoutes = express.Router();

const {
    userLogin,
    userRegistration,
    userProfile,
    getUser,
    updateUser,
    changePassword,
    deleteUser,
} = require('../controller/user.controller');
const { verifyToken } = require('../helper/tokenVerify');

userRoutes.post('/login', userLogin)

userRoutes.post('/reg', userRegistration);

userRoutes.get("/getuser", verifyToken, userProfile)

userRoutes.get('/getalluser', getUser);

userRoutes.patch('/updateuser', verifyToken, updateUser);

userRoutes.post('/changepassword', verifyToken, changePassword);

userRoutes.delete('/deleteuser', verifyToken, deleteUser);

module.exports = userRoutes;