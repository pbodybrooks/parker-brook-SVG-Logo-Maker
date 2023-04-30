class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return "<circle cx='50%' cy='50%' r='40%' fill='" + this.color + "' />";
    }
}

class Square extends Shape {
    render() {
        return "<rect width='80%' height='80%' x='10%' y='10%' fill='" + this.color + "' />";
    }
}

class Triangle extends Shape {
    render() {
        return "<polygon points='50%,10% 10%,90% 90%,90%' fill='" + this.color + "' />";
    }
}

module.exports = {Circle, Square, Triangle};