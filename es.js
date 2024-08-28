const express = require('express');
const app = express();
const passport = require('passport')
const expressSession = require('express-session');
require("./passport-config.js");
const userRoutes = require("./routes/user.routes.js");

const ejs = require('ejs');
app.set("view engine", 'ejs');

const morgan = require('morgan');
app.use(morgan('dev'));

require('dotenv').config();
const port = process.env.PORT;
const URL = process.env.MONGO_URL;

const mongoose = require('mongoose');
mongoose
    .connect(URL)
    .then(() => console.log(`Database connect successfully`))
    .catch(err => console.log(err))
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(expressSession({secret : "secret" , resave : false , saveUninitialized : false}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req ,res ,next) =>{
    console.log(req.user);
    res.locals.user = req.user; 
    next();
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});