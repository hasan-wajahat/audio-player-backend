const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
});
const Song = mongoose.model('Song', songSchema);

module.exports = Song;
