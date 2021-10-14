-- Add your code below and execute file in MySQL Shell --
SELECT first_name, last_name, 

FROM employee 
    INNER JOIN emp_role
    ON employee.manager_id = emp_role.department_id;

























UPDATE employee
SET manager_id = ;
WHERE id = ;

SELECT * FROM employee
WHERE manager_id = manager_id;