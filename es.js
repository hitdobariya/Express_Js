const express = require('express');
const server = express();
require('dotenv').config()
port = process.env.PORT
URL = process.env.MONGO_URL
server.use(express.urlencoded({ extended: true }));
const passport = require('passport');
const session = require('express-session');
const passportConfig = require('./passport-config');

const userRoutes = require('./routes/user.routes');

const ejs = require('ejs');
const path = require('path');
server.set("view engine", 'ejs');
server.set('views', path.join(__dirname, 'views'));

const morgan = require('morgan');
server.use(morgan('dev'));

const mongoose = require('mongoose');
mongoose
    .connect(URL)
    .then(() => console.log(`Database connect successfully`))
    .catch(err => console.log(err))
server.use(express.json());

passportConfig(passport);
server.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));
server.use(passport.initialize());
server.use(passport.session());

server.get('/', (req, res) => {
    res.send('hello world');
});

server.use('/', userRoutes);

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});