const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/contact', (req, res) => {
  const { name, message } = req.body;

  if (!name || name.length < 3) {
    return res.status(400).send('Nama minimal 3 karakter');
  }

  if (!message || message.length < 10) {
    return res.status(400).send('Pesan minimal 10 karakter');
  }

  res.send(`Terima kasih ${name}, pesan Anda: "${message}" telah diterima.`);
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
