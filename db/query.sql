USE globadine_db;
SELECT * FROM department;
SELECT * FROM emp_role;
SELECT * FROM employee;

SELECT * 
FROM emp_role
INNER JOIN employee
ON 
emp_role.id = employee.id;

UPDATE employee.role_id
SET employee.role_id=${employee.role_id}
WHERE role_id=${employee.role_id};

