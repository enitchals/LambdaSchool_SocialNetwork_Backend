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

module.exports = {
  createUser
};