const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/readMe-template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter GitHub username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a decription for your project.'
        },
        {
            type: 'input',
            name: 'install',
            message:'Please provide the intsallation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select the licenses',
            choices: ['MIT License', 'ISC License', 'GNU General Public License']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Provide all the contributors for this project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide test code'
        }
    ])
}

promptUser()
    .then(answers => {
        const readmeData = generateReadMe(answers);

        fs.writeFile('README.md', readmeData, err => {
            if (err) throw new Error(err);
            console.log('README created');
        })
    })