// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

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

# Questions

Check out my github repos at https://github.com/${data.github}

If you have questions or wish to contact me, please email me at https://github.com/${data.email}

`;
}



// const fs = require("fs");

// function generateReadMe(){
//   const file = `
  
//   #Create a Node.js App

//   Work with a partner

//   * As a developer, blah blah bla

//   * As a dev, do the other thing too

//   `

//   fs.writeFile("README.md", file, function(err){
//     if(err) console.log(err)
//   } )
// }

// generateReadMe()



/*

function generateHtml(responseObj){
    const html = `

    <html>
        <head>

            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <title>Portfolio</title>

        </head>

        <body>
            <div class="container">
                <div class="row justify-content-centerl justify-text-center">
                    <div class = "d-flex col justify-content-center">
                        <h1>My Name is ${responseObj.name}</h1>
                    </div>
                <div class="container">
                    <div class = "d-flex row">
                        <div class = "col-sm align-content-center justify-content-center">
                            <p>My job title is ${responseObj.title}</p>
                        </div>
                        <div class = "col-sm align-content-center justify-content-center">
                            <p>I live in ${responseObj.location}</p>
                        </div>
                        <div class = "col-sm align-content-center justify-content-center">
                            <p>${responseObj.job}</p>
                        </div>
                            <p>${responseObj.bio}</p>
                        <div class = "col-sm align-content-center justify-content-center">
                            Click my <a href = "${responseObj.linkedin}" target="_blank">LinkedIn Profile</a> to see more.
                        </div>
                        <div class = "col-sm align-content-center justify-content-center">
                            Click my <a href = "${responseObj.github}" target="_blank">Github Profile</a> to see more of my code.
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </body>
    
    </html>
    `

    return html
}


module.exports = {
    generateHtml
}


*/





module.exports = generateMarkdown;
