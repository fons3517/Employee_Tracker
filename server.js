const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // Add MySQL password
        password: 'iLoveCoding!!!1707',
        database: 'globadine_db'
    },
    console.log(`Connected to the globadine_db database.`)
);

// Query database

let deletedRow = '';

db.query(`DELETE FROM department WHERE id = ?`, deletedRow, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

db.query(`DELETE FROM emp_role WHERE id = ?`, deletedRow, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

db.query(`DELETE FROM employee WHERE id = ?`, deletedRow, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result);
});

// Query database
db.query('SELECT * FROM department', function (err, results) {
    console.log(results);
});

db.query('SELECT * FROM emp_role', function (err, results) {
    console.log(results);
});

db.query('SELECT * FROM employee', function (err, results) {
    console.log(results);
});

db.query('SELECT * FROM manager', function (err, results) {
    console.log(results);
});


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


function beginPrompt() {

    inquirer
        .prompt([
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What is the name of the department?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What is the name of the department?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'text',
                name: 'addDept',
                message: 'What would you like to do?',
            },
            {
                type: 'list',
                name: 'updateEmpRole',
                message: 'What would you like to do?',
                choices: ['Malia Brown', 'sarah Lourd', 'Tom Allen', 'Sam Kash', 'John Doe', 'Mike Chan', 'Ashley Rodriguez'],
            },
        ])
        .then(answers => {
            console.info('Answer:', answers.);
        });