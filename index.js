// Establish necessities required for Node 
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{ 
    type: "input", 
    message: "What is the title of your project?", 
    name: "title", 
}, 
{ 
    type: "input", 
    message: "What is the your project about? Insert a description", 
    name: "description", 
}, 
{ 
    type: "input", 
    message: "Insert a Table of Content", 
    name: "Table of Content", 
}, 
{ 
    type: "input", 
    message: "How do you install your project? Insert an installation guide", 
    name: "Installation", 
}, 

{ 
    type: "input", 
    message: "How do you use your project? Insert a usage guide", 
    name: "Usage", 
}, 
{ 
    type: "input", 
    message: "Insert details on any applicable licenses", 
    name: "License", 
}, 
{ 
    type: "input", 
    message: "Who contributed to the project? Insert contributor details", 
    name: "Contributors", 
}, 

{ 
    type: "input", 
    message: "Insert details on testing", 
    name: "Tests", 
}, 

{ 
    type: "input", 
    message: "Invite others to ask questions", 
    name: "Qs", 
}, 
];

// function to write README file
// Write to file using fs to create file & generates a new directory 
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}; 

// function to initialize program
// inquirer question prompt - response to write to file & generate markdown response 
function init(){
    inquirer.prompt(questions).then((promptResponse) => {
    writeToFile("README.md", generateMarkdown({...promptResponse}));
}); };

// function call to initialize program
init();


