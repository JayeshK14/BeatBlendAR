const express = require('express');
const app = express();
const path = require('path');

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the EJS template
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
