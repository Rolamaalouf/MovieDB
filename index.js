const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment port or 3000

app.get('*', (req, res) => { // Handles all GET requests
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});