import express from 'express';
import songsRouter from './src/routes/songs';
import { connectToDB } from './db';

const app = express();

// loads db and data
connectToDB();

// // Routing /////
app.use('/api/', songsRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server running on ${port}`));
