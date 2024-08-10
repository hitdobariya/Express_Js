const express = require('express');

const server = express();

const product = require('./product.json');

const morgan = require('morgan');

server.use(express.json());

server.use(morgan('dev'));


server.put('/product/:id', (req, res) => {
    let id = +req.params.id;
    let productIndex  =  product.findIndex((product)=> product.id === id);
    // console.log(productIndex);
    product.splice(productIndex , 1 , {...req.body});
    res.json({message : 'replace product successfully'});
});

server.get('/product', (req,res) => {
    res.json(product);
});

server.get('/product/:id', (req,res) => {
    let id = +req.params.id;
    let item  =  product.find((product)=> product.id === id);
    res.json(item);
});

server.listen(6000,()=>{
    console.log(`Server is running on port http://localhost:6000`);  
});