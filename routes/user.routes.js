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
const { upload } = require('../helper/uploadImage');

userRoutes.post('/login', userLogin)

userRoutes.post('/reg', upload.single('profileImage'), userRegistration);

userRoutes.get("/getuser", verifyToken, userProfile)

userRoutes.get('/getalluser', getUser);

userRoutes.patch('/updateuser', verifyToken, updateUser);

userRoutes.post('/changepassword', verifyToken, changePassword);

userRoutes.delete('/deleteuser', verifyToken, deleteUser);

module.exports = userRoutes;