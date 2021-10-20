// Import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
const { start } = require('repl');

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

    db.connect((err)=>{
        if (err) throw err;
        console.log(`Connected to the globadine_db database.`)
        startMenu()

    });


// Query database
/*
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


*/

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
                case "Udate Employee Role":
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
        console.log("Add Department")
        console.log("---------------")
        inquirer.prompt([
            {
                type: 'text',
                name: 'dept_name',
                message: 'What is the name of the department?',
            }
        ]).then(function ({dept_name})  {
            db.query("INSERT INTO department (dept_name) VALUES(?);",
            dept_name, function(err,data){
                if (err) throw err;
                console.log('Added ' + dept_name + ' to the database');
                startMenu();
    
            } )
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
                name: 'whichDept',
                message: 'Which department does the role belong to?',
                choices: ['Engineering', 'Finance', 'Legal', 'Sales', 'Service']
            }
        ]).then(function ({dept_name})  {
            const currentDept = new Role(id, dept_name);
            deptObj.push(currentDept);
            console.log('Added ' + answers.roleName + ' to the database');
            startMenu();
        });
    };
    function addEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'toDo',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
            },
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
                name: 'title',
                message: 'What is the employees role?',
                choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service']
            },
            {
                type: 'list',
                name: 'empMgr',
                message: 'Who is the employees manager?',
                choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown']
            }
        ]).then((answers) => {
                    console.log('Added ' + answers.fistName + answers.lastName + ' to the database')
        });
    };

    function updateEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'toDo',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
            },
            {
                type: 'list',
                name: 'chooseEmp',
                message: 'Which employees role do you want to update?',
                choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown', 'Sarah Lourd', 'Tom Allen', 'Sam Kash']
            },
            {
                type: 'list',
                name: 'assignRole',
                message: 'Which role do you want to assign to the selected employee?',
                choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service']
            }        
        ]).then((answers) => {
            console.log('Updated employees role');
        });
    };
// startMenu();