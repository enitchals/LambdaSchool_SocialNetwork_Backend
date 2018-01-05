const mongoose = require('mongoose');

const User = require('../models/userModels');

const createUser = (req, res) => {
  const {
    name,
    email,
    password,
    cohort,
    role,
    imagePath,
    aboutMe,
    location,
    gitHub,
    specialty
  } = req.body;
  const newUser = new User({ 
    name,
    email,
    password,
    cohort,
    role,
    imagePath,
    aboutMe,
    location,
    gitHub,
    specialty
  });
  console.log(newUser);
  newUser
    .save()
    .then(createdUser => res.json(createdUser))
    .catch(err => res.status(422).json(err));
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email, password })
    .select('email')
    .exec()
    .then(user => {
      if (user === null) {
        throw new Error();
      }
      res.json(user);
    })
    .catch(err => res.status(422).json(err));
};

const userById = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .select({password: 0})
    .exec()
    .then(user => {
      if (user === null) throw new Error();
      res.json(user);
    })
    .catch(err => res.status(422).json(err));
};

const users = (req, res) => {
  User.find({})
    .select({password: 0})
    .exec()
    .then(users => {
      if (users.length === 0) throw new Error();
      res.json(users);
    })
    .catch(err => res.status(422).json(err));
};

module.exports = {
  createUser,
  login,
  userById,
  users
};