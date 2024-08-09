const express = require('express');

const server = express();

const product = require('./product.json');

const morgan = require('morgan');

server.use(express.json());

server.use(morgan('dev'));

// server.get('/',(req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.write('hello world');
// });

server.post('/product', (req,res) => {
    // console.log(req.body);
    product.push(req.body);
    res.json({product : req.body , message : 'data added successfully'});
});

server.get('/product', (req,res) => {
    res.json(product);
});

server.get('/product/:id', (req,res) => {
    let id = +req.params.id;
    let item  =  product.find((product)=> product.id === id);
    res.json(item);
});

// server.listen(5000,()=>{
//     console.log(`Server is running on port http://localhost:5000`);  
// });