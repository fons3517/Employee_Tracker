// Import and require mysql2
const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
const { fetchAsyncQuestionProperty } = require('inquirer/lib/utils/utils');

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

function init() {
    
    function addDepartment() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'toDo',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit', 'View All Employees']
            },
            {
                type: 'text',
                name: 'dept_name',
                message: 'What is the name of the department?',
            }
        ]).then(answers => {
            console.log('Added ' + answers.deptName + ' to the database');
        });
    };

    function addRole() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'toDo',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees', 'Quit']
            },
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
        ]).then(answers => {
            console.log('Added ' + answers.roleName + ' to the database');
        });
    };

    function addEmployee() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'toDo',
                message: 'What would you like to do?',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees', 'Quit']
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
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'View All Employees', 'Quit']
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

};