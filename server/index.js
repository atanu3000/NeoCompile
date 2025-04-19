import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';
// Environment Variables
dotenv.config();

const app = express();

// import router from './routes/routes.js';
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
// Error Handling Middleware
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});

const PORT = process.env.PORT || 3000;

// Starting the server
app.listen(PORT, () => {
  console.log(`Server Started http://localhost:${PORT}`);
});