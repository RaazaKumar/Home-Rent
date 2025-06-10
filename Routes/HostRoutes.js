// const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const HostRoutes = express.Router();
HostRoutes.get('/Add-Home', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../Views/Add-Home.html'));
  console.log(req.url)
})

const registeredHomes = [];

HostRoutes.post('/Add-Home', (req, res, next) => {
  
  registeredHomes.push(req.body);
  console.log(req.url)
  res.render('SuccessfullyMsg');
})
module.exports = {
  HostRoutes,
  registeredHomes
}