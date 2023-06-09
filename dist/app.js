"use strict";

const db = require('./database/models');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// App setup
// Sequelize configuration
const {
  sequelize
} = db;
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
const app = express();

// Routes

// Export the app
module.exports = app;