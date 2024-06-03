// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// var PrettyError = require('pretty-error');
const path = require('path'); //The node:path module provides utilities for working with file and directory paths.
const generateMarkdown = require('./utils/generateMarkdown');
const { default: Choices } = require('inquirer/lib/objects/choices');
// const { writeFile, copyFile } = require('./utils/generateFile');

// TODO: Create an array of questions for user input
const questions = [

  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide instructions for installing your project.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for using your project.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select the License',
    choices :["MIT", "Apache2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]

  },
  {
    type: 'input',
    name: 'credits',
    message: 'List collaborators for your project.'
    },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide instructions for testing your project.'
  },
  {
    type: 'input',
    name: 'features',
    message: 'Please provide a list of features for your project.'
    },
    
]




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
  );

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      console.log("creating README.md File...");
      writeToFile('README.md', generateMarkdown(answers));
    });


}

// Function call to initialize app
init();
