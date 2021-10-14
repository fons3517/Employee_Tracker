DROP DATABASE IF EXISTS globadine_db;
CREATE DATABASE globadine_db;

USE globadine_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  NAME VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE emp_role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES department (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id)
  REFERENCES emp_role (id)
  ON DELETE SET NULL
);


