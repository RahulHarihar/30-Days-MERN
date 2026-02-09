const seperateEvenOdd = require("./utils.js").separateEvenOdd;

const arr = [10, 21, 34, 45, 56, 67];

const result = seperateEvenOdd(arr);

console.log(result.evenCount);
console.log(result.oddCount);
console.log(result.evenArr);
console.log(result.oddArr);
