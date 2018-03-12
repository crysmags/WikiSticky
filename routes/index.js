const express = require('express');
const route=express.Router();

route.use('/wiki', require('./wiki.js'));
route.use('/user', require('./user.js'));

route.get('/', function(req, res, next) {
    res.render('wikipage');
  });
  
  route.post('/', function(req, res, next) {
    res.send('response to POST request to /wiki/');
  });
  
  route.get('/add', function(req, res, next) {
    res.send('response to GET request to /wiki/add');
  });



module.exports = route;