import { Router } from 'express';
import Poll from '../models/Poll.js';

const router = Router();

router.post('/v1/delete', async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ message: 'Poll ID is required.' });
        }

        const deletedPoll = await Poll.findOneAndDelete({ id });

        if (!deletedPoll) {
            return res.status(404).json({ message: 'Poll not found.' });
        }

        
        res.clearCookie('poll');
        return res.status(200).json({ message: 'Poll has been deleted successfully.' });

    } catch (error) {
        console.error('Error occurred while deleting poll:', error);

        if (!res.headersSent) {
            return res.status(500).json({ message: 'Something went wrong.' });
        }
    }
});

export default router;
