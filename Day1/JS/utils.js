function calculateStats(arr) {
	let sum = 0;
	let max = arr[0];
	let min = arr[0];

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
	}

	let average = sum / arr.length;

	return { sum, max, min, average };
}

module.exports = { calculateStats };
