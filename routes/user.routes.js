const express = require('express');

const userRoutes = express();

const {
    addUser,
    getUser,
    // replaceUser,
    // updateUser,
    // deleteUser,
    getSingleUser
} = require('../controller/user.controller');

userRoutes.post('/', addUser);

userRoutes.get('/', getUser);

// userRoutes.put('/:id', replaceUser);

// userRoutes.patch('/:id', updateUser);

// userRoutes.delete('/:id', deleteUser);

userRoutes.get('/getuser', getSingleUser);

module.exports = userRoutes;