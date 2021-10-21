// Import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
require('console.table');
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // Add MySQL password
        password: 'iLoveCoding!!!1707',
        database: 'globadine_db'
    })

db.connect((err) => {
    if (err) throw err;
    console.log(`Connected to the globadine_db database.`)
    startMenu()

});



// Query database

function viewDepartments() {
    db.query('SELECT * FROM department', function (err, results) {
        if (err) throw err;
        console.table(results);
        startMenu();
    });

};

function viewRoles() {
    db.query('SELECT * FROM emp_role', function (err, results) {
        if (err) throw err;
        console.table(results);
        startMenu();
    });

};

function viewEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        if (err) throw err;
        console.table(results);
        startMenu();
    });

};


function startMenu() {

    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit'],
            name: 'userChoice'

        }
    ]).then(function ({ userChoice }) {
        switch (userChoice) {
            case "Add Department":
                addDepartment();
                break;
            case "Add Role":
                addRole();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Update Employee Role":
                updateEmployee();
                break;
            case "View All Employees":
                viewEmployees();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "View All Departments":
                viewDepartments();
                break;
            case "Quit":
                process.exit(0);
        }
    });
};

function addDepartment() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'dept_name',
            message: 'What is the name of the department?',
        }
    ]).then(function ({ dept_name }) {
        db.query("INSERT INTO department (dept_name) VALUES(?);",
            dept_name, function (err, data) {
                if (err) throw err;
                console.table('Added ' + dept_name + ' to the database');
                startMenu();

            })
    });
};

function addRole() {
    
    inquirer.prompt([
        {
            type: 'text',
            name: 'title',
            message: 'What is the name of the role?',
        },
        {
            type: 'text',
            name: 'salary',
            message: 'What is the salary of the role?',
        },
        {
            type: 'list',
            name: 'department_id',
            message: 'Which department does the role belong to?',
            choices: [1, 2, 3, 4],
        }
    ]).then((answers) => {
        db.query("INSERT INTO emp_role (title, salary, department_id) VALUES  (?,?,?);",
            [answers.title, answers.salary, answers.department_id],
            function (err, data) {
                if (err) throw err;
                console.log('Added ' + answers.title + ' to the database')
                startMenu();
            })
    });
};
function addEmployee() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'first_name',
            message: 'What is the employees first name?',
        },
        {
            type: 'text',
            name: 'last_name',
            message: 'What is the employees last name?',
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'What is the employees role?',
            choices: [15, 16, 17, 19, 20, 21]
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Who is the employees manager?',
            choices: [24, 25, 26, 27]
        }
    ]).then((answers) => {
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);",
            [answers.first_name, answers.last_name, answers.role_id, answers.manager_id],
            function (err, data) {
                if (err) throw err;
                console.log('Added ' + answers.first_name + " " + answers.last_name + ' to the database')
                startMenu();
            })
    });
};

function updateEmployee() {
    db.query("SELECT * FROM employee", (error, employees) => {
        const parsedEmp = employees.map(employee => {
            return ({
                name: `${employee.first_name} ${employee.last_name}`,
                value: employee.id,
            })
        });
        db.query("SELECT * FROM emp_role", (error, roles) => {
            const parsedRoles = roles.map(role => {
                return ({
                    name: role.title,
                    value: role.id,
                })
            });
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'id',
                    message: 'Which employees role do you want to update?',
                    choices: parsedEmp,
                },
                {
                    type: 'list',
                    name: 'role_id',
                    message: 'Which role do you want to assign to the selected employee?',
                    choices: parsedRoles,
                }
            ]).then((answers) => {
                console.log(answers);
                db.query("UPDATE emp. emp_role ;",
                    [answers.id, answers.role_id],
                    function (err, data) {
                        if (err) throw err;
                        console.log('Updated employees role');
                        startMenu();
                    })
            })
        })
    })
};


