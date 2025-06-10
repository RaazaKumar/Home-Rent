//Built-in Module
const http = require('http');
const express = require('express');
const path = require('path');
//Local Modules
const UserRoutes = require('./Routes/UserRoutes');
const { HostRoutes } = require('./Routes/HostRoutes');
const ContactUs = require('./Routes/ContactUs');

const app = express();
//for form data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
//ejs setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'Views'));

// Middleware to parse form data
app.use(UserRoutes);
app.use(HostRoutes);
app.use(ContactUs);

//Optional
app.get('/favicon.ico', (req, res) => res.status(204).end());
//Server Running Status
const server = http.createServer(app);
server.listen(3000, () => { console.log('Server is running successfully at PORT number : 3000'); });