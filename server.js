const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CORS = require('cors');

const server = express();
const port = process.env.PORT || 3030;

const routes = require ('./api/routes/routes');

const corsOptions = {
  origin: '*',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/LambdaSchool_SocialNetwork');

server.use(bodyParser.json());
server.use(CORS(corsOptions));

routes(server);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
