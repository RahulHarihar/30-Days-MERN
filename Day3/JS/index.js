const countResult = require("./utils.js");

const arr = [10, -5, 0, 20, -15, 0, 30];

const result = countResult(arr);

console.log(result.totalCount);
console.log(result.sum);
console.log(result.positiveNumbers);
console.log(result.negativeNumbers);
console.log(result.zerosCount);
