const queries = require('./queries');

// Initiatory question to ask the user what they would like to do
const action = [
  {
    type: 'list',
    name: 'activity',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
  },
]

const addDepartment = [
  {
    type: 'input',
    name: 'department',
    message: 'Enter the name of the department:',
  },
];

const addRole = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of the role:',
  },
  {
    type: 'input',
    name: 'salary',
    message: 'Enter the salary of the role:',
  },
  {
    type: 'list',
    name: 'department_id',
    message: 'Enter the name of the department:',
    choices: async () => {
      const departments = await queries.getAllDepartments();
      return departments.rows.map(department => department.name);
    }
  },
];


const addEmployee = [
  {
    type: 'input',
    name: 'first_name',
    message: 'Enter the first name of the employee:',
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'Enter the last name of the employee:',
  },
  {
    type: 'list',
    name: 'role_id',
    message: "Select their role:",
    choices: async () => {
      const roles = await queries.getAllRoles();
      return roles.rows.map(role => `${role.title}`);
    }
  },
  {
    type: 'list',
    name: 'manager_id',
    message: "Select their manager:",
    choices: async () => {
      const managers = await queries.getManagers();
      const managersArray = managers.rows.map(manager => `${manager.first_name} ${manager.last_name}`);
      // managersArray.push('null'); //Allows for an employee to be designated as a manager.
      // Would need to allow for the query to ignore the null value if selected.
      return managersArray;
    }
  },
];

const updateEmployeeRole = [
  {
    type: 'list',
    name: 'employee',
    message: 'Select an employee to update:',
    choices: async () => {
      const employees = await queries.getAllEmployees();
      return employees.rows.map(employee => `${employee.first_name} ${employee.last_name}`);
    }
  },
  {
    type: 'list',
    name: 'newRole',
    message: "What is the employee's new role?",
    choices: async () => {
      const roles = await queries.getAllRoles();
      return roles.rows.map(role => `${role.title}`);
    },
  }
];

module.exports = { action, addDepartment, addRole, addEmployee, updateEmployeeRole };
