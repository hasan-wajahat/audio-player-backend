const express = require('express');
const Song = require('../models/songs');

const router = express.Router();

/**
 * GET call for all the songs
 */
router.get('/songs', async (req, res) => {
  const songs = await Song.find();
  res.send({ data: songs, success: true });
});

/**
 * GET call for specific song
 */
router.get('/songs/:id', async (req, res) => {
  const { params: { id } } = req;
  const song = await Song.findOne({ id });
  if (!song) {
    res.status(404).send({
      message: 'Song not available for given ID',
      success: false,
    });
  } else {
    res.send({ data: song, success: true });
  }
});

module.exports = router;
