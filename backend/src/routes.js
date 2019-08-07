 //importing the express and DevController and LikeController and DislikeController
 const express = require('express');
 const DevController = require('./controllers/DevController');
 const LikeController = require('./controllers/LikeController');
 const DislikeController = require('./controllers/DislikeController');

 //route specific object
 const routes = express.Router(); 

 routes.get('/devs', DevController.index);
 routes.post('/devs', DevController.store);

 routes.post('/devs/:devId/likes', LikeController.store);
 routes.post('/devs/:devId/dislikes', DislikeController.store);

//exposing the routes variable
 module.exports = routes;
 
