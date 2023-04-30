// include shapes for testing of render functionality and creates a testing suite containing all tests
const {Circle, Square, upTriangle, downTriangle} = require("../lib/shapes");

// test that a red circle is rendered correctly
describe("Circle", () => {
    it("should render a circle", () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual("<circle cx='50%' cy='50%' r='100' width='100%' height='100%' fill='red' />");
    });
});

// test that a blue square is rendered correctly
describe("Square", () => {
    it("should render a square", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual("<rect width='66.67%' height='100%' x='16.67%' y='0' fill='blue' />");
    });
});

// test that a green upwards triangle is rendered correctly
describe("upTriangle", () => {
    it("should render an upwards triangle", () => {
        const shape = new upTriangle();
        shape.setColor("green");
        expect(shape.render()).toEqual("<polygon points='150 0 25 200 275 200' height='100%' width='100%' fill='green' />");
    });
});

// test that a yellow downwards triangle is rendered correctly
describe("downTriangle", () => {
    it("should render a downwards triangle", () => {
        const shape = new downTriangle();
        shape.setColor("yellow");
        expect(shape.render()).toEqual("<polygon points='150 200 25 0 275 0' height='100%' width='100%' fill='yellow' />");
    });
});
