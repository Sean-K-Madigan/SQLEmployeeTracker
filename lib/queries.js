const queries = {

  getAllDepartments: () => {
    return pool.query('SELECT * FROM departments');
  },

  getAllRoles: () => {
    return pool.query(`
      SELECT roles.id, roles.title, roles.salary, departments.name AS department
      FROM roles
      INNER JOIN departments ON roles.department_id = departments.id
    `);
  },

  getAllEmployees: () => {
    return pool.query(`
      SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.name AS department, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employees
      LEFT JOIN roles ON employees.role_id = roles.id
      LEFT JOIN departments ON roles.department_id = departments.id
      LEFT JOIN employees manager ON employees.manager_id = manager.id
    `);
  },

  addDepartment: (departmentName) => {
    return pool.query('INSERT INTO departments (name) VALUES ($1)', [departmentName]);
  },

  addRole: (title, salary, department_id) => {
    return pool.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
  },

  addEmployee: (first_name, last_name, role_id, manager_id) => {
    return pool.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id, manager_id]);
  },

  updateEmployee: () => {
    return pool.query('SELECT * FROM employees');
  },

  getAllRoleIds: () => {
    return pool.query('SELECT id FROM roles');
  },

  updateRole: () => {

  }
};


module.exports = queries;