const pool = require('../config/connection');

const queries = {

  getAllDepartments: () => {
    // console.log('getting all departments');
    return pool.query('SELECT * FROM departments');
  },

  getAllRoles: () => {
    // console.log('getting all roles');
    return pool.query(`
      SELECT roles.id, roles.title, roles.salary, departments.name AS department
      FROM roles
      INNER JOIN departments ON roles.department_id = departments.id
    `);
  },

  getAllEmployees: () => {
    // console.log('getting all employees');
    return pool.query(`
      SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.name AS department, CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      FROM employees
      LEFT JOIN roles ON employees.role_id = roles.id
      LEFT JOIN departments ON roles.department_id = departments.id
      LEFT JOIN employees manager ON employees.manager_id = manager.id
    `);
  },

  addDepartment: (department) => {
    // console.log('adding department');
    return pool.query('INSERT INTO departments (name) VALUES ($1)', [department]);
  },

  addRole: async (title, salary, department_name) => {
    console.log('adding role');
    const department_id = await pool.query('SELECT id FROM departments WHERE name = $1', [department_name]);
    // console.log(department_id.rows[0].id);
    return pool.query('INSERT INTO roles (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id.rows[0].id]);
  },

  getManagers: async () => {
    // console.log('getting managers');
    return pool.query('SELECT * FROM employees WHERE manager_id IS NULL');
  },

  addEmployee: async (first_name, last_name, role_name, manager_name) => {
    // console.log('adding employee');
    const role_id = await pool.query('SELECT id FROM roles WHERE title = $1', [role_name]);
    const manager_id = await pool.query('SELECT id FROM employees WHERE CONCAT(first_name, \' \', last_name) = $1', [manager_name]);
    return pool.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [first_name, last_name, role_id.rows[0].id, manager_id.rows[0].id]);
  },
  
  updateRole: async (employee, newRole) => {
    // console.log('updating role');
    const employee_id = await pool.query('SELECT id FROM employees WHERE CONCAT(first_name, \' \', last_name) = $1', [employee]);
    const role_id = await pool.query('SELECT id FROM roles WHERE title = $1', [newRole]);
    // console.log(role_id.rows);
    return pool.query('UPDATE employees SET role_id = $1 WHERE id = $2', [role_id.rows[0].id, employee_id.rows[0].id]);
  },
  
  // I'm unsure how to update the employees manager after updating their role.
  // updateEmployeeManager: (employee, newRole) => {
  //   console.log('updating manager');
  //   return pool.query('SELECT * FROM employees');
  // },
};


module.exports = queries;