const express = require('express');
const path = require('path');
const UserRoutes = express.Router();

const { registeredHomes } = require('./HostRoutes');

UserRoutes.get('/', (req, res, next) => {
  console.log("Registered Homes:", registeredHomes);
  res.render('Home', { homes: registeredHomes });
  console.log(registeredHomes.length)// Pass data to view
});

module.exports = UserRoutes;
