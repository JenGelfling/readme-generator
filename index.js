// const inquirer = require("inquirer");
// const fs = require('fs');
// const {getQuestions} = require("./questions");
// const questions = getQuestions();


// async function start(){
  
//   const responses = await inquirer.prompt(questions)

//   const logMessage = `The user ${responses.username} chose a favorite programminbg language of: ${responses.language}`

//   fs.writeFile("README.md", logMessage, (err) => {
//     if( err ){
//       console.error("There was an error writing the file.")
//     } else {
//       console.log("File written successfully!")
//     }
//   })
// }

// start()




// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// const {generateMarkdown} = require("./assets/generateMarkdown");
const {getUserQuestions} = require("./assets/questions");
// const { generateMarkdown } = require("./assets/generateMarkdown");
const getQuestions = getUserQuestions();
// const markdown = generateMarkdown();

async function start(){
  
  const data = await inquirer.prompt(getQuestions);
  const result = 
      `
# ${data.title}
    
## Description
    
${data.description}
    
## Table of Contents
    
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
    
    fs.writeFile("README.md", result, function(err){
      if(err) console.log(err)
      } )

}
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// function markdown(){
//   const result = 
//       `
    
//     # ${data.title}
    
//     ## Description
    
//     ${data.description}
    
//     ## Table of Contents
    
//     ## Installation
    
//     ${data.installation}
    
//     ## Usage
    
//     ${data.usage}
    
//     ## License
    
//     ${data.license}
    
//     ## Contributing
    
//     ${data.contribute}
    
//     ## Tests
    
//     ${data.test}
    
//     # Questions
    
//     Check out my github repos at https://github.com/${data.github}
    
//     If you have questions or wish to contact me, please email me at https://github.com/${data.email}
    
//     `
//     }

// })

// start()

start()




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
