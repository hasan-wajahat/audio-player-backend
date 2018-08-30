import express from 'express';
import Song from '../models/songs';

const router = express.Router();

/**
 * GET all songs
 * @returns list of all songs in DB
 */
router.get('/songs', async (req, res) => {
  try {
    const songs = await Song.find();
    res.send(songs);
  } catch (err) {
    res.send(err);
  }
});

/**
 * GET specific song
 * @param {string} id - song id
 * @returns {Song} returns song
 */
router.get('/songs/:id', async (req, res) => {
  const { params: { id } } = req;
  const song = await Song.findOne({ id });
  if (!song) {
    // if song does not exist return message
    res.status(404).send('Song not available for given ID');
  } else {
    // if song exists, then send song details
    res.send(song);
  }
});

export default router;
