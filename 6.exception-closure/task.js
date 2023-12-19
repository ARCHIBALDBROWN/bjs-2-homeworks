// Задача 2
class Triangle {
    constructor(side1, side2, side3) {
        if ((side1 > (side2 + side3)) || (side2 > (side1 + side3)) || (side3 > (side1 + side2))) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        const semiPerimeter = this.getPerimeter() / 2;
        let area = Math.sqrt(semiPerimeter * (semiPerimeter - this.side1) * (semiPerimeter - this.side2) * (semiPerimeter - this.side3));
        return Number(area.toFixed(3));
    }
}

function getTriangle(side1, side2, side3) {
    try {
        let triangle = new Triangle(side1, side2, side3);
        return triangle;
    } catch (error) {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },

            getArea() {
                return "Ошибка! Треугольник не существует";
            },
        };
    }
}
