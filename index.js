// TODO: Include packages needed for this application
const fs = require("fs");
const inquire = require("inquirer");
const markdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",  
    "What would you like to call your file?",  
    "Provide a short description explaining your project.",  
    "What are the Installation instructions?", 
    "Provide instructions for usage.",   
    "Please enter contribution guidelines.",    
    "Please enter test instructions.", 
    "Please enter your github username.",   
    "Please enter your email.",  
    "What license would you like to use?"  
];
const [ projectTitleQ, filenameQ, descriptionQ, installationQ, usageQ, contributionsQ, testQ, githubQ, emailQ, licenseQ] = questions;
function questionsFunc(){
    inquire.prompt([    
        {
            type: "input",
            message: projectTitleQ,
            name: "title"
        },
        {
            type: "input",
            message: filenameQ,
            name: "filename"
        },
        {
            type: "input",
            message: descriptionQ,
            name: "descr"
        },
        {
            type: "input",
            message: installationQ,
            name: "install"
        },
        {
            type: "input",
            message: usageQ,
            name: "usage"
        },
        {
            type: "input",
            message: contributionsQ,
            name: "constributions"
        },
        {
            type: "list",
            message: licenseQ,
            name: "license",
            choices: [
                'MIT',
                'GNU AGPL v3',
                'Apache 2.0 License',
                'Boost Software License 1.0'
            ],
        },
        {
            type: "input",
            message: testQ,
            name: "test"
        },
        {
            type: "input",
            message: githubQ,
            name: "github"
        },
        {
            type: "input",
            message: emailQ,
            name: "email"
        }
    ])
    .then((data) => {writeToFile(data.filename, data)})
    
    .catch((error) => {console.log(error)})
    }
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, markdown.generateMarkdown(data), (error) =>
    error ? console.log("Sorry there was and error: " + error) : console.log("Success")
    )
}

// TODO: Create a function to initialize app
function init() {
    questionsFunc();

}

// Function call to initialize app
init();
