const express = require('express');

const server = express();

const userRoutes = require('./routes/user.routes');

const morgan = require('morgan');

server.use(express.json());

server.use(morgan('dev'));

server.get('/', (req, res) => {
    res.send('hello world');
});

server.use('/api/user', userRoutes);

server.listen(7000, () => {
    console.log(`server start at http://localhost:7000`);
});