const express = require('express');
const mongoose = require('mongoose');
const songs = require('./routes/songs');

const app = express();
const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => console.log("Database connected"))
  .catch(error => console.error("Database error:", error));

// middleware /////
app.use('/api/', songs);
app.use('/static', express.static(`${__dirname}/public`));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on ${port}`));