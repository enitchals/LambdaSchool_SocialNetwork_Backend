const userControllerMethods = require ('../controllers/userControllers');

module.exports = (app) => {
  app.route('/new-user').post(userControllerMethods.createUser);
  app.route('/login').post(userControllerMethods.login);
  app.route('/posts').post(userControllerMethods.createPost);
  app.route('/posts/:id').get(userControllerMethods.userPosts);
  //in the line above, "id" refers to a user ID in mongoDB
  app.route('/posts/:id').post(userControllerMethods.addComment);
  //in the line above, "id" refers to a comment ID in mongoDB
};