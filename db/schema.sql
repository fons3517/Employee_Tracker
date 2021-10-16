DROP DATABASE IF EXISTS globadine_db;
CREATE DATABASE globadine_db;

USE globadine_db;

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE emp_role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR (30) NOT NULL,
  salary DECIMAL (7,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES department (id)
);

CREATE TABLE employee (
  id INT AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
  REFERENCES emp_role (id)
);

CREATE TABLE manager (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    employee_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id)
    REFERENCES employee (id)
);

