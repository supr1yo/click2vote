import { Router } from 'express';
import Poll from '../models/Poll.js';

const router = Router();

router.post('/v1/create', async (req, res) => {
    try {
        const { id, title, options, createdAt, endAt } = req.body;

        if (!id || !title || !Array.isArray(options) || !createdAt || !endAt) {
            return res.status(400).json({ message: 'Badly formatted request.' });
        }

        await Poll.create({ id, title, options, createdAt, endAt });

        res.cookie('poll', id, { httpOnly: true, secure: true, sameSite: 'strict' });
        return res.status(201).json({ message: 'Poll has been created successfully.' });
    } catch (error) {
        console.error('Error occurred while creating poll:', error);

        if (!res.headersSent) {
            return res.status(500).json({ message: 'Something went wrong.' });
        }
    }
});

export default router;
