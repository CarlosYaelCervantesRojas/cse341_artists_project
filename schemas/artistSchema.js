const { Schema } = require("mongoose");

const artistSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
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
    followers: {
        type: Number,
        required: true
    },
    nationality: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 3,
        uppercase: true
    },
    birthday: {
        type: Date,
        required: true
    },
    alive: {
        type: Boolean,
        required: true
    }
});

module.exports = artistSchema;