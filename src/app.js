import db from './database/models';
import express from 'express';
import dotenv from 'dotenv';
import createUser from './routers/userRouter';

dotenv.config();

// App setup
// Sequelize configuration
const { sequelize } = db;
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const app = express();

// Routes
// app.use('/api/')
app.use('/api', createUser)
// Export the app
export default app;
