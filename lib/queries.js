const { Pool } = require('pg');

const pool = new Pool(
  {
    // PostgreSQL username
    user: 'postgres',
    // PostgreSQL password
    password: 'password',
    host: 'localhost',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
)

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
  updateEmployeeRole: () => {
    return pool.query('SELECT * FROM employees');
}
};


module.exports = queries;