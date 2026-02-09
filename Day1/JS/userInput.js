const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", (input) => {
	const userArr = input.split(" ").map(Number);

	let sum = 0;
	let max = userArr[0];
	let min = userArr[0];

	for (let i = 0; i < userArr.length; i++) {
		sum += userArr[i];

		if (userArr[i] > max) max = userArr[i];
		if (userArr[i] < min) min = userArr[i];
	}

	const average = sum / userArr.length;

	console.log("Sum:", sum);
	console.log("Maximum:", max);
	console.log("Minimum:", min);
	console.log("Average:", average);

	rl.close();
});
