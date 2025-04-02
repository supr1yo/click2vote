import dotenv from 'dotenv';
dotenv.config({ path: './env' });
import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import connectDB from './database/database.js';
import cors from 'cors';

import createPoll from './routes/createPoll.js';
import deletePoll from './routes/deletePoll.js';
import editPoll from './routes/editPoll.js';
import viewPoll from './routes/viewPoll.js';
import votePoll from './routes/votePoll.js';

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use('/', createPoll);
app.use('/', deletePoll);
app.use('/', editPoll);
app.use('/', viewPoll);
app.use('/', votePoll);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Running on http://localhost:${PORT}`);
    })
}).catch((error) => {
    console.log(error);
});