To-do List 

This is a web application that allows users to create, update, and delete tasks on a to-do list. It has been built using Node.js and the Express framework, with data stored in a MongoDB database using Mongoose. The application uses EJS for templating and nodemon for live reloading during development. Environmental variables are set using dotenv. The application also includes custom CSS styling, as well as the Bootstrap framework for responsive design. The logic of the application is implemented in JavaScript.

### Prerequisites ### 
Before you can run this project, you must have the following installed on your computer:

- Node.js (download here: https://nodejs.org/en/download/)
- NPM (which comes bundled with Node.js)

### Installation ###

Clone this repository to your local machine:
git clone https://github.com/scazitir/todo-list-web-app.git

Navigate to the project directory:
cd [project name]

Install the required packages:
- npm install

Set up environment variables:
- cp .env.example .env

Edit the .env file with your own configuration details.

Usage
To start the development server, run:
nodemon start

This will start the server and make the app available at http://localhost:3000.