import { analyseArray } from "./utlis";

const arr: number[] = [20, 10, 48, 45, 36];

const result = analyseArray(arr);

console.log(result.sum);
console.log(result.min);
console.log(result.max);
console.log(result.average);
