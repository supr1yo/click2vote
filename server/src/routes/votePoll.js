import { Router } from 'express';
import Poll from '../models/Poll.js';

const router = Router();

router.post('/v1/vote', async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Poll ID is required.' });
        }

        const pollData = await Poll.findOne({ id });

        if (!pollData) {
            return res.status(404).json({ message: 'Poll not found.' });
        }

        return res.status(200).json({ pollData });

    } catch (error) {
        console.error('Error occurred while displaying poll:', error);

        if (!res.headersSent) {
            return res.status(500).json({ message: 'Something went wrong.' });
        }
    }
});

export default router;
