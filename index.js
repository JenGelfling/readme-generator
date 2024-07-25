
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const {getUserQuestions} = require("./assets/questions");
// const { generateMarkdown } = require("./assets/generateMarkdown");
const getQuestions = getUserQuestions();
// const markdown = generateMarkdown();

// // TODO: Create a function to initialize app
async function start(){
  
  const data = await inquirer.prompt(getQuestions);
  const result = 
`
# ${data.title}
    
## Description
    
${data.description}
    
## Table of Contents
    // I still need to create the table of contents with links to the other sections
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}
    
## License
    
${data.license}
    
## Contributing
    
${data.contribute}
    
## Tests
    
${data.test}
    
## Questions
    
Check out my github repos at https://github.com/${data.github}
    
If you have questions or wish to contact me, please email me at ${data.email}
`

  // TODO: Create a function to write README file
  fs.writeFile("README.md", result, function(err){
    if(err) console.log(err)
  })

}

// Function call to initialize app
start()