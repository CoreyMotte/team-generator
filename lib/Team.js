const inquirer = require('inquirer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const createPage = require('../src/page');

class Team {
    constructor() {
        this.member = [];
    }
}

async function createManager() {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `Please enter the Team Manager's name:`
            },
            {
                type: 'input',
                name: 'id',
                message: `Please enter the Team Manager's ID number:`
            },
            {
                type: 'input',
                name: 'email',
                message: `Please enter the Team Manager's email address:`
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `Please enter the Team Manager's office number:`
            },
        ])
}