const express = require('express');

const userRoutes = express();

const {
    addUser,
    getUser,
    // replaceUser,
    updateUser,
    deleteUser,
    getSingleUser,
    registration,
    login
} = require('../controller/user.controller');

userRoutes.post('/', addUser);

userRoutes.get('/', getUser);

// userRoutes.put('/:id', replaceUser);

userRoutes.patch('/', updateUser);

userRoutes.delete('/', deleteUser);

userRoutes.get('/getuser', getSingleUser);

userRoutes.post('/reg', registration);

userRoutes.post('/login', login)

module.exports = userRoutes;