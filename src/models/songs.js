import mongoose from 'mongoose';

const songSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
});

export default mongoose.model('Song', songSchema);
