const mongoose = require('mongoose');

const Post = require('../models/postModels.js')

const STATUS_USER_ERROR = 422;

const createPost = (req, res) => {
    const {text, author} = req.body;
    const newPost = new Post({ text, author });
    newPost
        .save()
        .then((createdPost) => {
            res.json(createdPost);
        })
        .catch((err) => {
            res.status(STATUS_USER_ERROR).json(err);
            return;
        });
};

const userPosts = (req, res) => {
    const { id } = req.params;
    Post
        .find({
            author: id,
        })
        .then((posts) => {
            res.json(posts);
        })
        .catch((err) => {
            res.status(STATUS_USER_ERROR).json(err);
            return;
        });
};

const addComment = (req, res) => {
    const { id } = req.params;
    const { text, author } = req.body;
    const comment = { author, text };
    Post.findById(id)
        .then(post => {
            if (post === null) throw new Error();
            const comments = post.comments;
            comments.push(comment);
            post
                .save()
                .then(newPost => {
                    Post.findById(newPost._id)
                        .populate('comments.author', 'username')
                        .exec((error, savedPost) => {
                            if (error) {
                                throw new Error();
                            }
                            res.json(savedPost);
                        });
                })
                .catch(err => res.status(STATUS_USER_ERROR).json({ error: 'No such post' }));
        })
};

module.exports = {
    createPost,
    userPosts,
    addComment,
}