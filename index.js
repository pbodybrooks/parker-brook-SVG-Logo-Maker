// include fs, inquirer, and shape classes to allow file writing, prompting of questions, and shape rendering, respectively
const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, upTriangle, downTriangle} = require("./lib/shapes");

// possible user inputs for shape selection
const shapeSelection = ["Circle", "Square", "Upwards Triangle", "Downwards Triangle"];

// check to ensure input is not left blank
function validateUserInput(input){
    if (input != "") {
        return true;
    }
    else {
        return "This field is required. Input cannot be left blank.";
    }
}

// prompts user for text, text color, shape, and shape color inputs
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

// writes the SVG code to a file after deconstructing the user's input
function writeToFile(data) {
    const fileName = "./examples/logo.svg"
    let svgCode = "";
    // base SVG code
    svgCode = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>`;

    // deconstruct user input
    userText = data.text;
    userShapeColor = data.shapeColor;
    userTextColor = data.textColor;

    // create shape object based on user input
    let userShape;
    if (data.shape === "Circle") {
        userShape = new Circle();
    } else if (data.shape === "Square") {
        userShape = new Square();
    } else if (data.shape === "Upwards Triangle") {
        userShape = new upTriangle();
    } else if (data.shape === "Downwards Triangle") {
        userShape = new downTriangle();
    }
    
    // set shape color and render shape
    userShape.setColor(userShapeColor);
    svgCode += userShape.render();

    // render text
    svgCode += `<text x='150' y='115' text-anchor='middle' font-size='50' fill='${userTextColor}'>${userText}</text>`;
    svgCode += "</svg>";

    // write SVG code to file, error handling
    fs.writeFile(fileName, svgCode, function(err) {
        err ? console.log(err) : console.log("Woot! SVG was successfully generated in '/examples' folder!")
    });
}

// initializes the prompting of questions
function init() {
    inquirer.prompt(questions).then(data => writeToFile(data));
}

// function call to initialize app
init();