const mongoose = require('mongoose');

const User = require('../models/userModels');

const createUser = (req, res) => {
  const { email, password, class } = req.body;
  const newUser = new User({ 
    email,
    password,
    class
  });
  newUser
    .save()
    .then(createdUser => res.json(createdUser))
    .catch(err => res.status(422).json(err));
};

module.exports = {
  createUser
};