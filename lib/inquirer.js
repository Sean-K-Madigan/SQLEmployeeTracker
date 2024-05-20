// Get required modules
const inquirer = require('inquirer');
const questions = require('./questions');
const queries = require('./queries');

inquirer.prompt(questions.action).then((answers) => {
  switch (answers.activity) {
    case 'View all departments':
      // query and display all departments
      console.log('View all departments');
      break;
    case 'View all roles':
      // query and display all roles
      console.log('View all roles');
      break;
    case 'View all employees':
      // query and display all employees
      console.log('View all employees');
      break;
    case 'Add a department':
      inquirer.prompt(questions.addDepartment).then((answers) => {}); //update database with new department
      break;
    case 'Add a role':
      inquirer.prompt(questions.addRole).then((answers) => {}); //update database with new role
      break;
    case 'Add an employee':
      inquirer.prompt(questions.addEmployee).then((answers) => {}); //update database with new employee
      break;
    case 'Update an employee role':
      // query the database for all employees
      // feed all employees into inquirer as a list of chioices
      // input new role
      // update the database with the new role for the selected employee
      break;
    default:
      console.log('Invalid activity');
  }
});
