import express from 'express';
import songsRouter from './routes/songs';
import {connectToDB} from './db'

// loads db and data
connectToDB();

const app = express();

// middleware /////
app.use('/api/', songsRouter);
app.use('/static', express.static(`${__dirname}/public`));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on ${port}`));