const express = require('express');
const path = require('path');
const ContactUs = express.Router();

ContactUs.get('/ContactUs', (req, res, next) => {
  console.log(req.url);
  res.sendFile(path.join(__dirname, '../', 'Views', 'ContactUs.html'))
  console.log(req.body);
})
module.exports = ContactUs; 