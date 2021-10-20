class Department {
    constructor(id, dept_name) {
        this.id = id,
        this.dept_name = dept_name
    };
    addDept(dept_name) {
        if(dept_name === this.dept_name) {
            return this.dept_name;
        }
    }
};

class Role {
    constructor(id, title, salary, department_id) {
        this.id = id,
        this.title = title,
        this.salary = salary,
        this.department_id = department_id
    }
    addRole() {
        if() {

        }
    };
};

class Employee {
    constructor()
}