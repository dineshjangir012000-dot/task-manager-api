# Task Manager API

##  Description

This is a RESTful Task Management API built using Node.js, Express, and MongoDB. It allows users to create, update, and delete tasks with proper validation and error handling.

--------

##  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose

---

##  Setup Instructions

1. Clone the repository

2. Install dependencies
   npm install

3. Create a .env file and add:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string

4. Run the server
   npm run dev

---

## API Endpoints

* POST /api/tasks → Create Task
* GET /api/tasks → Get All Tasks
* PUT /api/tasks/:id → Update Task
* DELETE /api/tasks/:id → Delete Task

---

## Features

* CRUD operations
* Input validation
* Error handling
* MVC architecture

---

## Author

Dinesh
