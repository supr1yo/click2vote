import { Schema, model } from 'mongoose';

const pollSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        unique: true,
        required: true,
    },
    options: [{
        name: { type: String, unique: true, required: true },
        count: { type: Number, default: 0 }
    }],
    startTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    endTime: {
        type: Date,
        required: true,
    }
});

const Poll = model('Poll', pollSchema);
export default Poll;
