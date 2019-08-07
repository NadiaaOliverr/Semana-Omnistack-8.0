//importing the express,routes and database plugin and cors
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

 //creating express server
 const server = express(); 

 //creating connection database url
 mongoose.connect('mongodb+srv://admin:admin@cluster0-7eq69.mongodb.net/omnistack8?retryWrites=true&w=majority',{
    useNewUrlParser: true
 });

 server.use(cors());
 
 //informating the use json 
 server.use(express.json());
 
 server.use(routes);

 //informing the port to the server
 server.listen(3333); 


