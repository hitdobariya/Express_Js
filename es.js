const express = require('express');

const server = express();

const product = ('./product.json');

server.use(express.json());

const morgan = require('morgan');

server.use(morgan('dev'));


server.get('/',(req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json(product);
});


server.listen(4000,()=>{
    console.log(`Server is running on port http://localhost:4000`);  
});