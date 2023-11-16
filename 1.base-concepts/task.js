"use strict";

// Задача 1
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let roots = [];

  if (discriminant < 0) {
    // нет корней
    return roots;
  } else if (discriminant === 0) {
    // один корень
    let root = -b / (2 * a);
    roots.push(root);
  } else {
    // два корня
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  }

  return roots;
}

// Задача 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return "Введите корректные числовые значения";
  }

  const monthlyPercent = percent / 100 / 12;
  const loanBody = amount - contribution;
  const monthlyPayment =
    loanBody *
    (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  const totalAmount = monthlyPayment * countMonths;

  return parseFloat(totalAmount.toFixed(2));
}

// Примеры использования
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 0, -4)); // [2, -2]

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // 12479.52
