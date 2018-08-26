const express = require('express');
const mongoose = require('mongoose');
const songs = require('./routes/songs');

const app = express();
mongoose.connect('mongodb://localhost/audio_player_backend');

// middleware /////
app.use('/api/', songs);
app.use('/static', express.static(`${__dirname}/public`));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on ${port}`));
