const express = require('express');
const app = express();
const PORT = 3000;

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// About er route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server Started http://localhost:${PORT}`);
});