

var inquirer = require("inquirer");
const fs = require("fs");
//var arr;
inquirer
  .prompt([
    {
      type: "input",
      message: "What do you want the title of your application to be?",
      name: "title"
    },
    {
      type: "input",
      message: "What is the description of your application?",
      name: "description"
    },
    {
      type: "input",
      message: "What are the installation instructions for your application?",
      name: "install"
    },
    {
        type: "input",
        message: "Enter your usage information.",
        name: "usage"
      },
      {
        type: "input",
        message: "Enter all the people that have contributed",
        name: "contributers"
      },
      {
        type: "input",
        message: "Enter your guidelines for contributions",
        name: "contributer"
      },
      {
        type: "input",
        message: "Enter the tests to run for your application.",
        name: "tests"
      },
      {
        type: "input",
        message: "what is your license for the applciation?",
        name: "license"
      },
      {
        type: "input",
        message: "what is your github username?",
        name: "github"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      }
      
    
  ])
  
  .then(function(response) {

     //arr = [response.title,"\n",response.,"\n", response["install-inst"], "\n",response.usage,"\n", response.contributer,"\n", response.tests,"\n",  response.license,"\n", response.github,"\n", response.email];
    
     const md = generateMD(response);
     
     fs.writeFile("readmes.md", md, function(err){

            if(err){
                console.log(err)
            }
            else{
                console.log("success")
            }


     })

})
  
    









function generateMD(info){

return`# ${info.title}

## Description 

${info.description}


## Table of Contents 



* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${info.install}


## Usage 

${info.usage} 


## Credits

${info.contributers}



## License

${info.license}


---



## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)




## Contributing

${info.contributer}

## Tests

${info.tests}

## Questions

${info.github}
\n
${info.email}


`;
}