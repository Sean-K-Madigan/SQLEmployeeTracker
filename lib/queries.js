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
    return pool.query('SELECT * FROM roles');
  },
  getAllEmployees: () => {
    return pool.query('SELECT * FROM employees');
  },
  updateEmployeeRole: () => {
    return pool.query('SELECT * FROM employees');
}
};


module.exports = queries;