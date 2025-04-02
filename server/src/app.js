import express, { urlencoded } from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config({ path: './env' });
const PORT = 3000 || process.env.PORT;
import connectDB from './database/database.js';
import cors from 'cors';
import createPoll from './routes/createPoll.js';

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express.json()); 
app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    });
});

app.use('/', createPoll);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Running on http://localhost:${PORT}`);
    })
}).catch((error) => {
    console.log(error);
});