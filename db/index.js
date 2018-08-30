/**
 * File for initializing mongodb &
 * loading fixture data
 */
const mongoose = require('mongoose');
const songs = require('./songs.json');

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => loadModelData() )
  .catch(error => console.error("Database error:", error));

  const loadModelData = async () => {
    console.log("Database connected");
    // loads model
    const Song =  require('../models/songs')
    // deletes older entries
    await Song.deleteMany({});
    // adds song data
    Song.create(songs);
  }
  




