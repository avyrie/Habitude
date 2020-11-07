const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes');
const jwt = require('jsonwebtoken')
const port = process.env.PORT || 3000;
const app = express();

// Cors
app.use(cors({
    origin: [`https://hiking-stamp.herokuapp.com`],
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200 
  }));
  
  // Middleware - json paring
  app.use(express.urlencoded({extended: false}));
  app.use(express.json());

 // API Routes
 app.use('/api/profile', routes.profile);
  // Port
  app.listen(port, () => console.log(`Server is running on port ${port}`));
