import * as readline from "readline";
import { evenOddResult } from "./utils";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question(
	"Enter even and odd array numbers seperated by space: ",
	(input: string) => {
		const arr: number[] = input.split(" ").map(Number);

		const result = evenOddResult(arr);

		console.log(result.evenCount);
		console.log(result.oddCount);
		console.log(result.evenArr);
		console.log(result.oddArr);
	},
);
