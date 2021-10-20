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


    