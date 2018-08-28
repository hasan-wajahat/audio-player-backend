const express = require('express');
const Song = require('../models/songs');

const router = express.Router();

/**
 * GET call for all the songs
 */
router.get('/songs', async (req, res) => {
  try {
  const songs = await Song.find();
  res.send(songs);
  } catch(err) {
    res.send(err);
  }
});

/**
 * GET call for specific song
 */
router.get('/songs/:id', async (req, res) => {
  const { params: { id } } = req;
  const song = await Song.findOne({ id });
  if (!song) {
    res.status(404).send('Song not available for given ID');
  } else {
    res.send(song);
  }
});

module.exports = router;
