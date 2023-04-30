const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

const shapeSelection = ["Circle", "Square", "Triangle"];

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
        choices: shapeSelection,
        validate: validateUserInput
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please specify your desired shape color (keyword or hexadecimal number):",
        validate: validateUserInput
    }
];

function writeToFile(data) {
    const fileName = "./examples/logo.svg"
    let svgCode = "";
    svgCode = `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='300' height='200'>`;

    userText = data.text;
    userShapeColor = data.shapeColor;
    userTextColor = data.textColor;

    let userShape;
    if (data.shape === "Circle") {
        userShape = new Circle();
    } else if (data.shape === "Square") {
        userShape = new Square();
    } else if (data.shape === "Triangle") {
        userShape = new Triangle();
    }

    userShape.setColor(userShapeColor);

    svgCode += `${userShape}`;
    svgCode += `<text x='150' y='130' text-anchor='middle' font-size='40' fill='${userTextColor}'>${userText}</text>`;
    svgCode += "</svg>";


    fs.writeFile(fileName, svgCode, function(err) {
        err ? console.log(err) : console.log("Woot! SVG was successfully generated!")
    });
}

// initializes the prompting of questions
function init() {
    inquirer.prompt(questions).then(data => writeToFile(data));
}

// Function call to initialize app
init();