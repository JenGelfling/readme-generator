// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [function getUserQuestions(){
    return [
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
      },
      {
        type: "input",
        message: "What is the description of the project?",
        name: "description"
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
        type: "input",
        message: "Tell people how they can contribute to the project.",
        name: "contribute"
      },
      {
        type: "input",
        message: "Tell people how to test the project.",
        name: "test"
      },
      {
        type: "input",
        message: "What is your GitHub URL profile?",
        name: "github"
      },
    ]
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
