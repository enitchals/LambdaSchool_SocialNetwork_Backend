# API for the back end of Lambda School's Social Network

## POST /new-user
Creates a new user and encrypts the password.

## POST /login
Logs in when supplied with a matching email and password. Returns the logged in user as an object.

## GET /users
Returns a list of all users.

## POST /posts
Creates a new post.

{text: "sample text", author: <mongoDB user ID>}

## GET /posts/:id
Returns all posts by the specified user.
NOTE: the ID here refers to the USER.

## POST /posts/:id
Posts a comment on the specified post.
NOTE: the ID here refers to the POST.