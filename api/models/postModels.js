const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Post', PostSchema);