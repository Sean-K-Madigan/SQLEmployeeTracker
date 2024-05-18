const express = require('express');
// Import and require Pool (node-postgres)
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
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

pool.connect();



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});