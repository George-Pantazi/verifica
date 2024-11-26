const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'www')));

app.get('/api/mante', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'mante.json'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

app.listen(port, () => {
  console.log(`Il server è attivo su http://localhost:${port}`);
});
