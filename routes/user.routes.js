const express = require('express');

const userRoutes = express();

const {
    getUser,
    addUser,
    replaceUser,
    updateUser,
    deleteUser,
    getSingleUser
} = require('../controller/user.controller');

userRoutes.get('/', getUser);

userRoutes.post('/', addUser);

userRoutes.put('/:id', replaceUser);

userRoutes.patch('/:id', updateUser);

userRoutes.delete('/:id', deleteUser);

userRoutes.get('/:id', getSingleUser);

module.exports = userRoutes;