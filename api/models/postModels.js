const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: String,
    timestamp: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const PostSchema = new mongoose.Schema({
    imagePath: {
        type: String,
    },
    text: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    comments: [CommentSchema],
});

module.exports = mongoose.model('Post', PostSchema);