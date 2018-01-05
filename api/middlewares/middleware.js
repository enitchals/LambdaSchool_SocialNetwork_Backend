const bcrypt = require ('bcrypt');

const User = require('../models/userModels');

const BCRYPT_COST = 11;

const hashPassword = (req, res, next) => {

}

const authenticate = (req, res, next) => {
  
}

module.exports = {
  hashPassword,
  authenticate
};