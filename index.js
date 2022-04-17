const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of the project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What is the installation steps of the project?",
    },
    {
      type: "input",
      name: "Usage",
      message: "What is the Usage of the project?",
    },
    {
      type: "list",
      name: "license",
      message: "What is license?",
      choices: [
        "MIT",
        "Boost 1.0",
        "Apache 2.0",
        "GPL 3.0",
        "BSD 2-Clause",
        "BSD 3-Clause",
        "CC0 1.0",
        "CC BY 4.0",
        "CC BY-SA 4.0",
        "CC BY-NC 4.0",
        "CC BY-ND 4.0",
        "CC BY-NC-SA 4.0",
        "CC BY-NC-ND 4.0",
        "EPL 1.0",
        "GPL v3",
        "GPL v2",
        "AGPL v3",
        "LGPL v3",
        "FDL 1.3",
        "Hippocratic 2.1",
        "Hippocratic 3.0",
        "IPL 1.0",
        "ISC",
        "MPL 2.0",
        "Open Data Commons Attribution",
        "ODbL",
        "Artistic-2.0",
        "Open Font-1.1",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contribute to this project?",
    },
    {
      type: "input",
      name: "test",
      message: "What is the test process of the project?",
    },
    
    {   
        message: "What is the user github email address?",
        name: "GitHub_email"
    },
    {   
        message: "What is the user github username?",
        name: "GitHub_username"
    }
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, generateMarkdown.generateMarkdown(data), "utf-8");
}

// TODO: Create a function to initialize app
function init() {
  questions()
    // Use writeFileSync method to use promises instead of a callback function
    .then((response) => writeToFile(__dirname + "/DS_Store/Readme.md", response))
    .then(() => console.log("Successfully wrote to index.html"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
