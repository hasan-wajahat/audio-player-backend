/**
 * File for initializing mongodb &
 * loading fixture data
 */
import mongoose from 'mongoose';
import Song from '../models/songs';

// loads songs from json file
const songs = require('./songs.json');

// get DB-URL from environment
const dbUrl = process.env.DB_URL || 'mongodb://mongo:27017/audio-player';

const loadModelData = async () => {
  console.log('Database Connected');
  // deletes older entries
  await Song.deleteMany({});
  // adds song data
  Song.create(songs);
};

// connect to DB
const connectToDB = () => {
  mongoose
    .connect(dbUrl)
    .then(() => loadModelData())
    .catch(error => console.error('Database error:', error));
};

export {
  connectToDB,
};
