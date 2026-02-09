const seperateEvenOdd = require("./utils.js").separateEvenOdd;
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", (input) => {
	const userArr = input.trim().split(" ").map(Number);

	const result = seperateEvenOdd(userArr);
	console.log(result.evenCount);
	console.log(result.oddCount);
	console.log(result.evenArr);
	console.log(result.oddArr);

	rl.close();
});
