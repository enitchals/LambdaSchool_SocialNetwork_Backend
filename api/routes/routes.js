const userControllerMethods = require ('../controllers/userControllers');
const postControllerMethods = require ('../controllers/postControllers');

module.exports = (app) => {
  app.route('/new-user').post(userControllerMethods.createUser);
  app.route('/login').post(userControllerMethods.login);
  app.route('/posts').post(postControllerMethods.createPost);
  app.route('/posts/:id').get(postControllerMethods.userPosts);
  //in the line above, "id" refers to a user ID in mongoDB
  app.route('/posts/:id').post(postControllerMethods.addComment);
  //in the line above, "id" refers to a comment ID in mongoDB
};