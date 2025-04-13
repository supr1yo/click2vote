import { Router } from 'express';
import Poll from '../models/Poll.js';

const router = Router();

router.post('/v1/create', async (req, res) => {
    
    try {
        const { id, title, options, startTime, endTime } = req.body;

        if (!id || !title || !Array.isArray(options) || !startTime || !endTime) {
            return res.status(400).json({ message: 'Badly formatted request.' });
        }
        await Poll.create({ id, title, options, startTime, endTime });
        res.cookie('poll', id, { httpOnly: true, secure: true, sameSite: 'strict' });
        return res.status(201).json({ message: 'Poll has been created successfully.' });
    } catch (error) {
        console.error('Error occurred while creating poll:', error);
        return res.status(500).json({ message: 'Something went wrong.'});
    }
});

export default router;
