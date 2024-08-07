// const express = require('express');

// const data = [
//     {id: 1, name: 'John Doe', age: 25},
//     {id: 2, name: 'Jane Doe', age: 30},
//     {id: 3, name: 'Alice Doe', age: 28}
//  ];

// const server = express();

// server.get('/',(req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('Hello, world');
//     res.end();
// });

// server.get('./about',(req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.write('This is about page');
//     res.end();
// });

// server.get('/api/users',(req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.json(data);
// });

// server.listen(1000,()=>{
//     console.log(`Server is running on port http://localhost:1000`);  
// });




// const express = require('express');

// const server = express();

// server.get('/',(req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.send('Hello, world');
//     res.end();
// });

// server.post('/',(req, res) => {
//     res.setHeader('Content-type', 'text/plain');
//     res.send('post method');
//     res.end();
// });

// server.patch('/',(req, res) => {
//     res.setHeader('Content-type', 'text/plain');
//     res.send('patch method');
//     res.end();
// });

// server.put('/',(req, res) => {
//     res.json({method : 'put method'});
// });

// server.delete('/',(req,res) => {
//     res.setHeader('Content-type', 'text/plain');
//     res.send('delete method');
// });

// server.listen(2000,()=>{
//     console.log(`Server is running on port http://localhost:2000`);  
// });



