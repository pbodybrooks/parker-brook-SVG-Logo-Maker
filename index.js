const fs = require("fs");
const inquirer = require("inquirer");

const shapes = ["circle", "square", "triangle"];

function validateUserInput(input){
    if (input != "") {
        return true;
    }
    else {
        return "This field is required. Input cannot be left blank.";
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters to be displayed in your logo:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "textColor",
        message: "Please specify your desired text color (keyword or hexadecimal number):",
        validate: validateUserInput
    },
    {
        type: "list",
        name: "shape",
        message: "Please select a logo shape:",
        choices: shapes,
        validate: validateUserInput
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please specify your desired shape color (keyword or hexadecimal number):",
        validate: validateUserInput
    }
];

function writeToSVG(data) {
    const fileName = "./examples/logo.svg"

    fs.writeFile(fileName, generateSVG(data), function(err) {
        err ? console.log(err) : console.log("Woot! " + fileName + " Successfully Generated!")
    });
}

// initializes the prompting of questions
function init() {
    inquirer.prompt(questions).then(data => writeToSVG(data))
}

// Function call to initialize app
init();