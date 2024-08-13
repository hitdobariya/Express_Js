const express = require('express');
const server = express();

const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');

const morgan = require('morgan');
server.use(morgan('dev'));

const mongoose = require('mongoose');
mongoose
    // .connect('mongodb://localhost:27017/product')
    .connect('mongodb://localhost:27017/user')
    .then(()=> console.log(`Database connect successfully`))
    .catch(err => console.log(err))
server.use(express.json());

server.get('/', (req,res) => {
    res.send('hello world');
});

server.use('/api/product', productRoutes);
server.use('/api/user', userRoutes);

server.listen(8000,()=>{
    console.log(`Server is running on port http://localhost:8000`);  
});