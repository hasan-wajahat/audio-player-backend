const express = require('express');
const api = require('./routes');

const app = express();

// middleware /////
app.use('/api', api);
app.use('/static', express.static(`${__dirname}/public`));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on ${port}`));
