// Import and require Pool (node-postgres)
const { Pool } = require('pg');

// Connect to database
const pool = new Pool(
  {
    user: 'postgres',
    password: 'password',
    host: 'localhost',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
)

pool.connect();

module.exports = pool;