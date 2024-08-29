const express = require('express');
const server = express();
require('dotenv').config()
port = process.env.PORT
URL = process.env.MONGO_URL

const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const cartRoutes = require('./routes/cart.routes');

const morgan = require('morgan');
server.use(morgan('dev'));

const path = require('path');
server.use("uploadImages", express.static(path.join(__dirname, 'uploadImages')));

const mongoose = require('mongoose');
mongoose
    // .connect('mongodb://localhost:27017/product')
    .connect(URL)
    .then(() => console.log(`Database connect successfully`))
    .catch(err => console.log(err))
server.use(express.json());

server.get('/', (req, res) => {
    res.send('hello world');
});

server.use('/api/product', productRoutes);
server.use('/api/user', userRoutes);
server.use('/api/cart', cartRoutes)

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});