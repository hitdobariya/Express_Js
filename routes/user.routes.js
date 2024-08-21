const express = require('express');

const userRoutes = express.Router();


const {
    addUser,
    getUser,
    // replaceUser,
    updateUser,
    deleteUser,
    getSingleUser,
    userRegistration,
    userLogin,
    userProfile
} = require('../controller/user.controller');
const { verifyToken } = require('../helper/tokenVerify');


userRoutes.post('/', addUser);

userRoutes.get('/', getUser);

// userRoutes.put('/:id', replaceUser);

userRoutes.patch('/', updateUser);

userRoutes.delete('/', deleteUser);

userRoutes.get('/getuser', getSingleUser);

userRoutes.post('/reg', userRegistration);

userRoutes.post('/login', userLogin)

userRoutes.get("/me", verifyToken, userProfile)

module.exports = userRoutes;