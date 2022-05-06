// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your README? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title for your README!');
                return false;
            }
        }
    },

    {
        type: "input",
        name: "description",
        message: "Please describe your README (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a README description!');
            }
        }
    },

    {
        type: "input",
        name: "installation",
        message: "Enter README installation instructions."
    },

    {
        type: "input",
        name: "usage",
        message: "Enter README usage instructions."
    },

    {
        type: "list",
        name: "license",
        message: "Please select use license.",
        choices: ['none', 'Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC']
    },

    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines."
    },

    {
        type: "input",
        name: "testing",
        message: "Please provide testing instructions."
    },

    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username"
    },

    {
        type: "input",
        name: "email",
        message: "Enter your email address"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile('./dist/README.md', fileName, data, err => {
        if (err) {
            reject(err);
            return;
        }

        resolve({
            ok: true,
            message: 'File created!'
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
