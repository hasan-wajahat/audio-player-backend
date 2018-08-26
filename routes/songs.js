const express = require('express');
const Song = require('../models/songs');

const router = express.Router();

router.get('/songs', async (req, res) => {
  const songs = await Song.find();
  res.send({
    data: songs,
    success: true,
  });
});

router.get('/songs/:id', async (req, res) => {
  const { params: { id } } = req;
  const song = await Song.findOne({ id });
  if (!song) return res.status(404).send('Song not available for given ID');
  res.send(song);
});

module.exports = router;
