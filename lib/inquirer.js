// Get required modules
const inquirer = require('inquirer');
const questions = require('./questions');
const queries = require('./queries');

inquirer.prompt(questions.action).then((answers) => {
  switch (answers.activity) {
    case 'View all departments':
      // query and display all departments
      const departments = queries.getAllDepartments();
      console.table(departments.rows);
      break;
    case 'View all roles':
      // query and display all roles
      const roles = queries.getAllRoles();
      console.table(roles.rows);
      break;
    case 'View all employees':
      // query and display all employees
      const employees = queries.getAllEmployees();
      console.table(employees.rows);
      break;
    case 'Add a department':
      inquirer.prompt(questions.addDepartment).then((answers) => {
        queries.addDepartment(answers.deparmentName)
      }); //update database with new department
      break;
    case 'Add a role':
      inquirer.prompt(questions.addRole).then((answers) => {
        queries.addRole(answers.title, answers.salary, answers.department_id)
      }); //update database with new role
      break;
    case 'Add an employee':
      inquirer.prompt(questions.addEmployee).then((answers) => {
        queries.addEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id)
      }); //update database with new employee
      break;
    case 'Update an employee role':
      inquirer.prompt(questions.updateEmployee).then((answers) => {
        queries.updateEmployee()
      });
      // query the database for all employees
      // feed all employees into inquirer as a list of chioices
      // input new role
      // update the database with the new role for the selected employee
      break;
    default:
      console.log('Invalid activity');
  }
});
