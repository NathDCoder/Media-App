const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const songSchema = new Schema({
    song:{
        type: String,
        required: true,
        trim: true,
    },
    artist:{
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
        {
            song: {
                type: String,
                required: true
            },
            artist: {
                type: String,
                required: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
});

const Comment = model('Comment', songSchema);

module.exports = Comment;