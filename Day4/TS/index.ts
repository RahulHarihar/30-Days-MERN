import { findInArray } from "./utils";

const arr = [10, 5, 20, 8, 15];

const result = findInArray(arr);

console.log("Min:", result.min);
console.log("Max:", result.max);
console.log("Second Min:", result.secondMin);
console.log("Second Max:", result.secondMax);
