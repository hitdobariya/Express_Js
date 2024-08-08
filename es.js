const express = require('express');

const server = express();


//built-in middleware

server.use(express.json());
// server.use(express.urlencoded({extended: true}));

const middleWare = (req,res,next)=>{
    console.log(req.body.name);
    next();
};


server.get('/',(req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hello, world');
    res.end();
});


server.listen(4000,()=>{
    console.log(`Server is running on port http://localhost:4000`);  
});