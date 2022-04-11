const inquirer = require('inquirer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const createPage = require('../src/page');

class Team {
    constructor() {
        // blank array to append users to
        this.member = [];
    }

    async generateTeam() {
        // run createManager function to ensure a manager user exists
        await this.createManager();
        // prompt user for another user or to end the process
        await this.nextStep();
    }

    async createManager() {
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
    
            .then((managerItem) => {
                this.member.push(new Manager(managerItem));
            });
    }

    async createIntern() {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `Please enter the intern's name:`
                },
                {
                    type: 'input',
                    name: 'id',
                    message: `Please enter the intern's ID number:`
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `Please enter the intern's email address:`
                },
                {
                    type: 'input',
                    name: 'school',
                    message: `Please enter the intern's school:`
                },
            ])
    
            .then((internItem) => {
                this.member.push(new Intern(internItem));
            });
    }

    async createEngineer() {
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: `Please enter the engineer's name:`
                },
                {
                    type: 'input',
                    name: 'id',
                    message: `Please enter the engineer's ID number:`
                },
                {
                    type: 'input',
                    name: 'email',
                    message: `Please enter the engineer's email address:`
                },
                {
                    type: 'input',
                    name: 'github',
                    message: `Please enter the engineer's GitHub username:`
                },
            ])
    
            .then((engineerItem) => {
                this.member.push(new Engineer(engineerItem));
            });
    }

    async nextStep() {
        await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'What would you like to do next?',
            choices: ['Add a new intern', 'Add a new engineer', 'Finish creating this team']
        })

        .then(async ({choice}) => {
            // if user is done adding members, then:
            if (choice == 'Finish creating this team') {
                //input code to generate page
                createPage(this.member);
                
            } else if (choice == 'Add a new intern') {
                await this.createIntern();
                await this.nextStep();

            } else if (choice == 'Add a new engineer') {
                await this.createEngineer();
                await this.nextStep();
            } 
        })
    }

}





module.exports = Team;