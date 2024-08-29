const express = require('express');
const app = express();
const passport = require('passport')
const session = require('express-session');
require("./passport-config.js");
const userRoutes = require("./routes/user.routes.js");
const MongoStore = require("connect-mongo")


app.use(session({
    secret: "hit",
    saveUninitialized: true,
    resave: true,
    store: MongoStore.create({mongoUrl:"mongodb+srv://hitdobariya:hitdobariya@cluster0.ncl5d.mongodb.net/todolist",collectionName:"sessions"}),
    cookie : {
        maxAge: 1000*60*60*12
    }
}));
app.use(passport.initialize());
app.use(passport.session());

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