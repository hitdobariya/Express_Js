const express = require('express');

const server = express();

const morgan = require('morgan');

const user = require('./user.json');

server.use(express.json());

server.use(morgan('dev'));

server.get('/', (req,res) => {
    res.write('hello world');
    res.end();
});

server.post('/user', (req,res) => {
    user.push(req.body);
    res.json({user : req.body , message : 'user added successfully'});
});

server.get('/user', (req,res) => {
    res.json(user);
});

server.get('/user/:id', (req,res) => {
    let id = +req.params.id;
    let item = user.find((user) => user.id === id);
    res.json(item);
});

server.listen(5000, () => {
    console.log(`server start at http://localhost:5000`);
});