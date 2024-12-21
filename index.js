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

// /time route to return current time in HH:MM format
app.get('/time', (req, res) => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');  // Ensures 2-digit format
  const minutes = now.getMinutes().toString().padStart(2, '0');  // Ensures 2-digit format

  // Format the time as HH:MM
  const time = `${hours}:${minutes}`;
  res.setHeader('Content-Type', 'application/json');  // Explicitly set the content type

  // Respond with the time in the format {status: 200, message: <TIME>}
  res.json({
    status: 200,
    message: time
  });
});

// Handles all GET requests (catch-all route) - Move this to the bottom
app.get('*', (req, res) => { 
  res.send('ok');
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
