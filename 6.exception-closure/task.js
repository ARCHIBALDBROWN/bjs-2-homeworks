function parseCount(value) {
    let parsedValue = Number.parseFloat(value);
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    } else {
        return parsedValue;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(firstLine, secondLine, thirdLine) {
        this.firstLine = firstLine;
        this.secondLine = secondLine;
        this.thirdLine = thirdLine;

        if (firstLine + secondLine < thirdLine || secondLine + thirdLine < firstLine || firstLine + thirdLine < secondLine) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.firstLine + this.secondLine + this.thirdLine;
    }

    getArea() {
        let p = this.getPerimeter() * 0.5;
        let square = Math.sqrt(p * (p - this.firstLine) * (p - this.secondLine) * (p - this.thirdLine));
        return square;
    }
}

function getTriangle(firstLine, secondLine, thirdLine) {
    try {
        return new Triangle(firstLine, secondLine, thirdLine);
    } catch (error) {
        return {
            getArea: () => 'Ошибка! Треугольник не существует',
            getPerimeter: () => 'Ошибка! Треугольник не существует',
        };
    }
}

