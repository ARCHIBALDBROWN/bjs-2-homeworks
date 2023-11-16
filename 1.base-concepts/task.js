"use strict"

function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let result = [];

  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result = [root1, root2];
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    result = [root];
  }

  return result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return "Введите корректные числовые значения";
  }

  let loanBody = amount - contribution;
  let monthlyPercent = percent / 100 / 12;
  let monthlyPayment =
    loanBody *
    (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  let totalAmount = monthlyPayment * countMonths;

  return totalAmount.toFixed(2);
}

console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(calculateTotalMortgage(10, 10000, 50000, 12))