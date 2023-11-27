


# Task Description: Simple Social Media Feed
 Objective:
 Create a basic social media feed application where users can register, log in,
 upload posts, like and unlike posts, and view a feed of posts from other users.
 Requirements:
 1. User Authentication:- Implement user registration and login functionalities.- Users should be able to securely create an account and log in.
 2. Post Creation:- Authenticated users should be able to create posts.- Each post should have a title, content, and a timestamp.
 3. Post Feed:- Display a feed of posts on the main page.- Posts should show the author's username, post title, content, and
 timestamp.
 4. Like and Unlike:- Users should be able to like and unlike posts.- Display the number of likes for each post.
 Note: Additionally you can also implement the comment feature which allows
 users to comment on each other’s post. The comments need not be nested
 comments.
 Guidelines:- Use React for the frontend.- Utilise a backend framework like Node.js with Express for handling user
 authentication and managing posts.- Store user data and posts in a MongoDB database.
 Submission:- Share the code repository with clear instructions on how to run the
 application.-Share a video explaining the site and give a clear walkthrough


Now we start the project assignment.
 -:The basics Steps
 1) First open the terminal.
 2) Then type in cmd npx create-react-app (Your Project name) /*(Note:- Node shoulb be installed before.)
 3)instal some library in vs code extention ES7 & ESLint
 4) Go to the MERNTASK file.
 5) Now install some libraries. 
 {
    1) Axios (Used for get, post,delete, patch data calls). (npm install axios)
    2) Material ui (For UI).(npm i @material-ui/core & @material-ui/icons)
    3) Redux (state management tool) (npm redux react-redux redux-thunk (dispatch middleware)) & redux-devtools-Extensions
    4) moment (date formatter library)
 }

 * For Start this project simple run npm start
 app.js header & front 
 app.css style for home page
    

 ================================BACKEND======================================

 :- make a directory & open this (use mkdir F & cd F)
 1) *npm init -y (it create package.json file)
 2) install library.
  {
    *npm cache clean --force

   * npm i express mongoose cors
   * npm i nodemon
   *nodemon (for runserver)

  }
  3) create server.js file
  4) install some more library
  {
    *npm install bcrypt cookie-parser jsonwebtoken
   1) bcrypt (for password encryption)
    2) cokie parser, jsonwebtoken(for token generation)
    3)multer (bor multi-part/form data parsing.) (* npm i multer)
    4) dotenv()
  }

----------------------------------------------

 create .env file
 create controller folder
 create models folder
 create middlewares folder
 create routers folder
# What you need to run this application:

- Node
- MongoDB or Mongo Atlas
- NPM
# How to run this application

- Make sure MongoDB is running on your system or online.
- include MongoDB database link in .env file.
- Open command line in the cloned folder,
- To install dependencies for backend, run npm install in main folder.
- To run backend type command node server in main folder.
- To install dependencies for frontend , run npm install in /FrontEnd folder.
- To run frontend type command npm start in /FrontEnd folder.

