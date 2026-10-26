const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (HTML, images, CSS) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route compatible with Express v5
app.get('{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});