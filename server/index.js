import express from 'express';
import dotenv from 'dotenv';

// Environment Variables
dotenv.config();

const app = express();

import router from './routes/routes.js';

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server Started http://localhost:${PORT}`);
});