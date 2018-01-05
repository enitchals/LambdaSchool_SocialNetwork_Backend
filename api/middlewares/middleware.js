const bcrypt = require ('bcrypt');

const User = require('../models/userModels');

const BCRYPT_COST = 11;

hashPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    throw new Error();
    return;
  }
  bcrypt
    .hash(password, BCRYPT_COST)
    .then((pass) => {
      req.password = pass;
      next();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

authenticate = (req, res, next) => {
  const { email, password } = req.body;
  if (!email) {
    throw new Error();
    return;
  }
  User.findOne({ email }, (err, user) => {
    if (err || user === null) {
      throw new Error();
      return;
    }
    const hashedPass = user.password;
    bcrypt
      .compare(password, hashedPass)
      .then((response) => {
        if (!response) throw new Error();
        req.loggedInUser = user;
        next();
      })
      .catch((error) => {
        throw new Error();
        return;
      });
  });
};

module.exports = {
  hashPassword,
  authenticate
};