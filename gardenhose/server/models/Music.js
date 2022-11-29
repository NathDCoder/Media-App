const { Schema, model } = require('mongoose');
const { Music } = require('../schemas');

const songSchema = new Schema({
    song:{
        // type: String,
        // required: '',
        // minlength: 1,
        // maxlength: 280,
        // trim: true,
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
                // type: String,
                // required: true,
                // minlength: 1,
                // maxlength: 280,
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

const Music = model('Music', songSchema);

module.exports = Music;