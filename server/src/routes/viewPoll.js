import { Router } from 'express';
const router = Router();
import Poll from '../models/Poll';

router.post('/v1/delete', async (req, res, next) => {
    const { id } = req.body;
    if (!id) return res.status(400).send({ message: 'Badly formatted request.' });

    try {
        const pollData = await Poll.findOne({ id });
        res.status(201).send({ data: pollData });
    } catch (error) {
        res.status(400).send({ message: 'Something went wrong.' });
        throw new Error('Error occured while editing: ' + error);
    }
});

export default router;