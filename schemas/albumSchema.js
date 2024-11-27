const { Schema } = require("mongoose");

const albumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    totalTracks: {
        type: Number,
        required: true,
        min: 1
    },
    genres: {
        type: [String],
        required: true
    },
    popularity: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
});

module.exports = albumSchema;