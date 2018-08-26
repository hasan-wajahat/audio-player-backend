const express = require('express');
const songs = require('./songs.json');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Worlds');
});

app.get('/api/songs', (req, res) => {
  res.send({
    data: songs,
    success: true,
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on ${port}`));
