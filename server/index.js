import express from 'express';
import dotenv from 'dotenv';

// Environment Variables
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import router from './routes/routes.js';
app.use("/api", router);

const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server Started http://localhost:${PORT}/api`);
});