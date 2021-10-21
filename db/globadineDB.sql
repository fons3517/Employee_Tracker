INSERT INTO department (dept_name)
VALUES   ("Sales"),
         ("Engineering"),
         ("Finance"),
         ("Customer Service"),
         ("Legal");

INSERT INTO emp_role (title, salary,department_id)
VALUES   ("Sales Manager", 80000.00, 1),
         ("Engineering Manager", 15000.00, 2),
         ("Legal Team Manager", 25000.00, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 18, null),
        ("Mike", "Chan", 22, null), 
        ("Ashley", "Rodriguez", 23, null),
        ("Kevin", "Tupik", 24, null),
        ("Kunal", "Singh", 19, 1),
        ("Malia", "Brown", 20, 4),
        ("Sarah", "Lourd", 21, 4),
        ("Tom", "Allen", 15, 2);
