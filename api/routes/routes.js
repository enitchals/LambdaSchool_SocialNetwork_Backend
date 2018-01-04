const userControllerMethods = require ('../controllers/userControllers');

module.exports = (app) => {
  app.route('/new-user').post(userControllerMethods.createUser);
};