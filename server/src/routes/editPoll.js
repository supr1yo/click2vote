import { Router } from 'express';
const router = Router();
import Poll from '../models/Poll';

router.post('/v1/edit', async (req, res, next) => {
    const {title, options, createdAt, endAt } = req.body;

    try {
        await Poll.findOneAndUpdate({ id }, {
            title,
            options,
            createdAt,
            endAt
        });
        res.status(201).send({
            message: 'Poll has been edited successfully.'
        });
    } catch (error) {
        res.status(400).send({ message: 'Something went wrong.' });
        throw new Error('Error occured while editing: ' + error);
    }
});

export default router;