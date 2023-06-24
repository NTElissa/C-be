import db from "./database/models";
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


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

app.get("/", (req, res) => {
  res.status(200).send(`
<h1 style="text-align: center; margin-top: 20vh;"> my-brand  APIS</h1>
`);
});


export default app;
