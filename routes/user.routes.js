const express = require('express');

const userRoutes = express.Router();

const {
    Registration,
    logout,
    todolist,
} = require('../controller/user.controller');
const passport = require('passport');
const { isAuthenticated } = require('../helper/passportauth');

userRoutes.get("/login", (req, res) => {
    res.render('login');
});

userRoutes.get("/register", (req, res) => {
    res.render('register');
});

userRoutes.post("/register", Registration);

userRoutes.post("/login", passport.authenticate('local', {
    successRedirect: "todolist",
    failureRedirect: "login",
}));

userRoutes.get("/todolist", todolist);

userRoutes.get('/logout', isAuthenticated, logout);

module.exports = userRoutes;