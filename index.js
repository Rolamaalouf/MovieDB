const express = require('express');
const app = express();

// Define the port the server will listen on (either 3000 or an environment variable)
const port = process.env.PORT || 3000;  // Use environment port or default to 3000

// Define the /test route
app.get('/test', (req, res) => {
  res.json({
    status: 200,
    message: "ok"
  });
});

// Handles all GET requests (catch-all route)
app.get('*', (req, res) => { 
  res.send('ok');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on http://localhost:3000`);
});
