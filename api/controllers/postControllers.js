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

const listPosts = (req, res) => {
    Post.find({})
        .select('text')
        .exec()
        .then(posts => {
            if (posts.length === 0) throw new Error();
            res.json(posts);
        })
        .catch(err => res.status(STATUS_USER_ERROR).json(err));
};

const findPost = ()