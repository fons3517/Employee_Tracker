SELECT *

FROM employee 
INNER JOIN emp_role
INNER JOIN department
   ON employee.id = emp_role.id = department.dept_name;























UPDATE employee
SET manager_id = ;
WHERE id = ;

SELECT * FROM employee
WHERE manager_id = manager_id;