# Student Management System

A web-based Student Management System developed as a CRUD Application for managing student records.

## Project Overview

The Student Management System allows users to perform basic CRUD operations on student records.

CRUD stands for:

- **Create** - Add a new student
- **Read** - View and search student records
- **Update** - Modify existing student information
- **Delete** - Remove a student record

## Features

- Add new student records
- Display all student records
- Search students by name
- Highlight the searched student's complete row
- Modify student details
- Delete student records
- Clear form fields
- Store student data in MongoDB
- Responsive user interface using Bootstrap
- Favicon added to the application

## Student Information

The application stores the following information:

- Roll No.
- Name
- Degree
- City

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap 5
- Node.js
- Express.js
- EJS
- MongoDB
- Mongoose


## Note
The project currently uses a local mongoDB database. The application is not hosted yet

## Project Structure

```text
Student-Management-System/
│
├── public/
│   └── assets/
│       ├── css/
│       │   └── style.css
│       │
│       ├── js/
│       │   ├── BLL.js
│       │   └── script.js
│       │
│       └── images/
│           └── favicon.png
│
├── model/
│   └── Student.js
│
├── views/
│   └── index.ejs
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore

