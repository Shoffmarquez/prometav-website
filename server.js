const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
console.log(`Starting server with PORT env: ${process.env.PORT}, using port: ${PORT}`);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/onboarding', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'onboarding.html'));
});

app.listen(PORT, () => {
  console.log(`ProMetaV server running on port ${PORT}`);
});
