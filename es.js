const express = require('express');

const server = express();

const productRoutes = require('./routes/product.routes');

const morgan = require('morgan');

server.use(express.json());

server.use(morgan('dev'));

server.get('/', (req,res) => {
    res.send('hello world');
});

server.use('/api/product', productRoutes);

server.listen(8000,()=>{
    console.log(`Server is running on port http://localhost:8000`);  
});