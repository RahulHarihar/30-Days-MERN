import * as readline from "readline";
import { analyseArray } from "./utlis";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter array numbers seperated by space: ", (input: string) => {
	const arr: number[] = input.split(" ").map(Number);

	const result = analyseArray(arr);

	console.log(result.sum);
	console.log(result.min);
	console.log(result.max);
	console.log(result.average);

	rl.close();
});
