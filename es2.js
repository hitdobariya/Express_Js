const express = require('express');

const server = express();

const user = require('./user.json');

const morgan = require('morgan')

server.use(express.json());

server.use(morgan('dev'));

server.put('/user/:id', (req,res) => {
    let id = +req.params.id;
    let userIndex = user.findIndex((user) => user.id === id);
    user.splice(userIndex , 1 , {...req.body});
    res.json({message : 'user replace successfully'});
});

server.patch('/user/:id' , (req,res) => {
    let id = +req.params.id;
    let userIndex = user.findIndex((user) => user.id === id);
    let users = user[userIndex];
    user.splice(userIndex , 1 , {...users , ...req.body});
    res.json({message : 'user update successfully'});
});

server.delete('/user/:id' , (req, res) => {
    let id = +req.params.id;
    let userIndex = user.findIndex((user) => user.id === id);
    user.splice(userIndex , 1);
    res.json({message : 'user delete successfully'});
});

server.get('/user', (req,res) => {
    res.json(user);
});

server.get('/user/:id', (req,res) => {
    let id = +req.params.id;
    let item = user.find((user) => user.id === id);
    res.json(item);
});

server.listen(6000 , () => {
    console.log(`server start at http://localhost:6000`);
});