const express = require('express');
const app = express();
const port = 3000;

// Configura i file statici
app.use(express.static('www'));

// API per il file JSON
app.get('/api/mante', (req, res) => {
  res.sendFile(__dirname + '/www/mante.json');
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`);
});
