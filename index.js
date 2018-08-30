const express = require('express');
const songs = require('./routes/songs');

// loads db and data
require('./db');

const app = express();

// middleware /////
app.use('/api/', songs);
app.use('/static', express.static(`${__dirname}/public`));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on ${port}`));