// Get required modules
const inquirer = require('inquirer');
const { action, addDepartment, addRole, addEmployee, updateEmployeeRole } = require('./lib/questions');
const queries = require('./lib/queries');

async function main() {
  try {
    const answers = await inquirer.prompt(action);

    switch (answers.activity) {
      case 'View all departments':
        const departments = await queries.getAllDepartments();
        console.table(departments.rows);
        break;
        
      case 'View all roles':
        const roles = await queries.getAllRoles();
        console.table(roles.rows);
        break;
        
      case 'View all employees':
        const employees = await queries.getAllEmployees();
        console.table(employees.rows);
        break;
        
      case 'Add a department':
        const departmentAnswers = await inquirer.prompt(addDepartment);
        // console.log(departmentAnswers);
        await queries.addDepartment(departmentAnswers.department);
        console.log('Department added successfully.');
        break;
        
      case 'Add a role':
        const roleAnswers = await inquirer.prompt(addRole);
        await queries.addRole(roleAnswers.title, roleAnswers.salary, roleAnswers.department_id);
        console.log('Role added successfully.');
        break;
        
      case 'Add an employee':
        const employeeAnswers = await inquirer.prompt(addEmployee);
        await queries.addEmployee(employeeAnswers.first_name, employeeAnswers.last_name, employeeAnswers.role_id, employeeAnswers.manager_id);
        console.log('Employee added successfully.');
        break;
        
      case 'Update an employee role':
        const updateAnswers = await inquirer.prompt(updateEmployeeRole);
        await queries.updateRole(updateAnswers.employee, updateAnswers.newRole);
        await queries.updateEmployeeManager()
        console.log('Employee role updated successfully.');
        break;
        
      default:
        console.log('Invalid activity');
    }

    main();

  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main();
