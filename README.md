# API for the back end of Lambda School's Social Network

## POST /new-user
Creates a new user and encrypts the password.

## POST /login
Logs in when supplied with a matching email and password. Returns the logged in user as an object.

## GET /users
Returns a list of all users.

## GET /users/:id
Returns a specific user object.

(ID refers to the USER)

## DELETE /users/:id
Deletes the specified user.

(ID refers to the USER)

## GET /users/:id/pic
Returns the user profile image for a specific user.

(ID refers to the USER)

## POST /posts
Creates a new post.

{text: "sample text", author: mongoDB user ID}

## DELETE /posts/:id
Deletes the post with the specified id.

(ID refers to the POST)

## GET /posts/:id
Returns all posts by the specified user.

(ID refers to the USER)

## POST /posts/:id
Posts a comment on the specified post.

(ID refers to the POST)

## DELETE /comments/:id
Deletes the comment with the specified id.

(ID refers to the COMMENT)