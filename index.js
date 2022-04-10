const inquirer = require('inquirer');
const fs = require('fs');
const Team = require('./lib/Team');

new Team().generateTeam();