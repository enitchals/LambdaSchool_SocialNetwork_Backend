const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    class: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'instructor', 'TA', 'graduate'],
    },
    imagePath: {
        type: String,
        default: 'https://i.imgur.com/gKMqPjv.png',
    },
    aboutMe: {
        type: String,
    },
    location: {
        type: String,
    },
    gitHub: {
        type: String,
    },
    specialty: {
        type: String,
    },
});

module.exports = mongoose.model('User', UserSchema);