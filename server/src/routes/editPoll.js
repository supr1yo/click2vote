import { Router } from 'express';
import Poll from '../models/Poll.js';

const router = Router();

router.post('/v1/edit', async (req, res) => {
    try {
        const pollId = req.cookies.poll;

        if (!pollId) {
            return res.status(400).json({ message: 'Poll ID is missing from cookies.' });
        }

        const { title, options, startTime, endTime } = req.body;

        if (!title || !options || !startTime || !endTime) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const updatedPoll = await Poll.findOneAndUpdate(
            { id: pollId },
            { title, options, startTime, endTime },
            { new: true }
        );

        if (!updatedPoll) {
            return res.status(404).json({ message: 'Poll not found.' });
        }

        return res.status(200).json({ message: 'Poll has been edited successfully.', updatedPoll });

    } catch (error) {
        console.error('Error occurred while editing poll:', error);

        if (!res.headersSent) {
            return res.status(500).json({ message: 'Something went wrong.' });
        }
    }
});

export default router;
