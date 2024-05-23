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
    type: 'input',
    name: 'department_id',
    message: 'Enter the name of the department:',
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
    type: 'input',
    name: 'role_id',
    message: "Enter their role's id number:",
  },
  {
    type: 'input',
    name: 'manager_id',
    message: "Enter their manager's id number:",
  },
];

const updateEmployeeRole = [
  {
    type: 'list',
    name: 'employee',
    message: 'Select an employee to update:',
    choices: async () => {
      const employees = await queries.getAllEmployees();
      return employees.rows.map(employee => `${employee.id} ${employee.first_name} ${employee.last_name}`);
    }
  },
  {
    type: 'input',
    name: 'newRole',
    message: 'Enter the new role id for the employee:',
    validate: async (input) => {
      const roleIds = await queries.getAllRoleIds();
      const validIds = roleIds.rows.map(role => role.id);
      if (validIds.includes(parseInt(input))) {
        return true;
      } else {
        return 'Please ensure you have added this role to the database before updating an employee to it.';
      }
    }
  }
];
