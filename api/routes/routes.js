const userControllerMethods = require ('../controllers/userControllers');

module.exports = (app) => {
  app.route('/new-user').post(userControllerMethods.createUser);
  app.route('/login').post(userControllerMethods.login);
  app.route('/posts').post(userControllerMethods.createPost);
  app.route('/posts/:id').get(userControllerMethods.userPosts);
  app.route('/posts/:id').post(userControllerMethods.addComment);
};