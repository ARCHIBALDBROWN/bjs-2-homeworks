﻿
function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
  
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
  
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }
  
  
  class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
  
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return +area.toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        area: () => "Ошибка! Треугольник не существует",
        perimeter: () => "Ошибка! Треугольник не существует",
      };
    }
  }
  
  
  // Задача 1
  console.log(parseCount("42")); 
  console.log(validateCount("not a number")); 
  
  // Задача 2
  const triangle1 = getTriangle(3, 4, 5);
  console.log(triangle1.perimeter()); 
  console.log(triangle1.area()); 
  
  const triangle2 = getTriangle(1, 1, 3); 
  console.log(triangle2.perimeter()); 
  console.log(triangle2.area()); 
  