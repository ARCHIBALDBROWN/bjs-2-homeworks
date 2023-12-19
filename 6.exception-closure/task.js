// Задача 1

function parseCount(value) {
    let parsedValue = Number.parseInt(value);
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

// Задача 2

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
        return Number(square.toFixed(3));
    }
}

function getTriangle(firstLine, secondLine, thirdLine) {
    try {
        return new Triangle(firstLine, secondLine, thirdLine);
    } catch (error) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует";
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
