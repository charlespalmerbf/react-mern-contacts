# react-mern-contacts

Welcome to my GitHub repository for React MERN Contacts! This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, and Node.js) for managing contacts. Below you will find some information on how to use and navigate this repository.

Getting Started
---------------

To get started with this repository, simply clone it to your local machine using the following command:

`git clone https://github.com/charlespalmerbf/react-mern-contacts.git`

Then, navigate to the project directory and install the necessary dependencies:

`cd react-mern-contacts
npm install`

Next, create a `.env` file in the root directory of the project and add the following variables:

`MONGO_URI=<your MongoDB URI>
JWT_SECRET=<your JWT secret key>`

Finally, start the development server:

`npm run dev`

Features
--------

React MERN Contacts is designed to help users keep track of their contacts. Some of the key features include:

-   Ability to add, edit, and delete contacts
-   User authentication using JSON Web Tokens (JWT)
-   Integration with MongoDB for data persistence

Technologies Used
-----------------

This web application was built using the following technologies:

-   MongoDB
-   Express.js
-   React
-   Node.js
-   JSON Web Tokens (JWT)
-   Axios
-   bcrypt.js

File Structure
--------------

The repository is organized into the following directories:

-   `client/`: Contains the source code for the frontend, built with React.
-   `server/`: Contains the source code for the backend, built with Node.js and Express.js.
-   `config/`: Contains configuration files for the backend.
-   `models/`: Contains the Mongoose models for the application.
-   `routes/`: Contains the API routes for the application.

Contributing
------------

If you would like to contribute to this project, please feel free to submit a pull request.
