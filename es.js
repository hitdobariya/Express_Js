const express = require('express');

const server = express();

const morgan = require('morgan');

server.use(express.json());

server.use(morgan('dev'));

server.get('/', (req,res) => {
    res.send('hello world');
});

server.use('/product/api')

server.listen(7000,()=>{
    console.log(`Server is running on port http://localhost:7000`);  
});