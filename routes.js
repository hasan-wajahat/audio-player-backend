const express = require('express');
const songs = require('./songs.json');

const router = express.Router();

router.get('/songs', (req, res) => {
  res.send({
    data: songs,
    success: true,
  });
});

router.get('/songs/:id', (req, res) => {
  const { params: { id } } = req;
  const song = songs.find(entry => entry.id === parseInt(id, 10));
  if (!song) return res.status(404).send('Song not available for given ID');
  res.send(song);
});

module.exports = router;
