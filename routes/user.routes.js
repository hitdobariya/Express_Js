const express = require('express');

const userRoutes = express.Router();

const {
    // userLogin,
    // userRegistration,
    // userProfile,
    // getUser,
    // updateUser,
    // changePassword,
    // forgotPassword,
    // deleteUser,
    // specUser,
    loginUser,
    Registration,
} = require('../controller/user.controller');
// const { verifyToken } = require('../helper/tokenVerify');
// const { upload } = require('../helper/uploadImage');
const passport = require('passport');

// userRoutes.post('/login', userLogin)

// userRoutes.post('/reg', upload.single('profileImage'), userRegistration);

// userRoutes.get("/getuser", verifyToken, userProfile);

// userRoutes.get('/getalluser', getUser);

// userRoutes.patch('/updateuser', verifyToken, updateUser);

// userRoutes.post('/changepassword', verifyToken, changePassword);

// userRoutes.delete('/deleteuser', verifyToken, deleteUser);

// userRoutes.get('/users', specUser);

userRoutes.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
}));

userRoutes.get('/login', loginUser);

userRoutes.get('/register', Registration);

module.exports = userRoutes;