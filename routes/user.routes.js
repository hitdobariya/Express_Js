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
    // specUser,
    loginUser,
    Registration,
    todolist
} = require('../controller/user.controller');
// const { verifyToken } = require('../helper/tokenVerify');
// const { upload } = require('../helper/uploadImage');
const passport = require('passport');
const { isAuthenticated} = require('../helper/passportauth')
 
// userRoutes.post('/login', userLogin)

// userRoutes.post('/reg', upload.single('profileImage'), userRegistration);

// userRoutes.get("/getuser", verifyToken, userProfile);

// userRoutes.get('/getalluser', getUser);

// userRoutes.patch('/updateuser', verifyToken, updateUser);

// userRoutes.post('/changepassword', verifyToken, changePassword);

// userRoutes.delete('/deleteuser', verifyToken, deleteUser);

// userRoutes.get('/users', specUser);

userRoutes.get("/todolist", isAuthenticated, todolist);

userRoutes.post("/login", passport.authenticate("local", { failureRedirect: "/register", successRedirect: "/todolist" }));

userRoutes.get("/login", loginUser);

userRoutes.post("/register", Registration);

userRoutes.get("/register", Registration);

// userRoutes.get("/logout", (req, res) => {
//     req.logout();
//     res.send("logged out");
// });

module.exports = userRoutes;