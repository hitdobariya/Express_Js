const express = require('express');

const userRoutes = express.Router();

// const User = require("./model/user.model");

const {
    // userLogin,
    // userRegistration,
    // userProfile,
    // getUser,
    // updateUser,
    // changePassword,
    // forgotPassword,
    // deleteUser,
    Registration,
    todolist,
    logout
} = require('../controller/user.controller');
// const { verifyToken } = require('../helper/tokenVerify');
const passport = require('passport');
const { isAuthenticated } = require('../helper/passportauth')

// userRoutes.post('/login', userLogin)

// userRoutes.post('/reg' userRegistration);

// userRoutes.get("/getuser", verifyToken, userProfile);

// userRoutes.get('/getalluser', getUser);

// userRoutes.patch('/updateuser', verifyToken, updateUser);

// userRoutes.post('/changepassword', verifyToken, changePassword);

// userRoutes.delete('/deleteuser', verifyToken, deleteUser);

userRoutes.get("/login", (req, res) => {
    res.render('login');
});

userRoutes.post("/login", passport.authenticate('local', {
    successRedirect: "/todolist",
    failureRedirect: "/login",
}));

userRoutes.get("/register", (req, res) => {
    res.render('register');
});

userRoutes.post("/register", Registration);

userRoutes.get("/todolist", isAuthenticated, (req, res) => {
    res.render('todolist');
});

userRoutes.get('/logout', isAuthenticated, logout);

module.exports = userRoutes;