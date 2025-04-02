const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const pollSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    options: [{
        name: { type: String, required: true },
        count: { type: Number, default: 0 }
    }],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    endAt: {
        type: Date,
        required: true,
    }
});

const Poll = model('Poll', pollSchema);
module.exports = Poll;
