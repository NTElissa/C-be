// Imports
import morgan from 'morgan';
import session from 'express-session';
import swaggerUI from 'swagger-ui-express';
import express from 'express';
import cors from 'cors';
import db from '../database/models';


import  userController from '../src/controllers/userController.js';
import expanseController from '../src/controllers/expanceController.js';


// Sequelize configuration
dotenv.config();

// App setup
const app = express();
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};


// Routes

app.use('/api', userController);
app.use('/api', expanseController);

// Export the app
export default app;

