export type ArrayOpsResult = {
	total: number;
	sum: number;
	average: number;
	max: number | undefined;
	min: number | undefined;
};

export function arrayOperations(arr: number[]): ArrayOpsResult {
	if (arr.length === 0) {
		return {
			total: 0,
			sum: 0,
			average: 0,
			max: undefined,
			min: undefined,
		};
	}

	let total = 0;
	let sum = 0;
	let average = 0;
	let max = arr[0];
	let min = arr[0];

	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];

		total++;
		sum += value;

		if (value > max) max = value;

		if (value < min) min = value;
	}
	average = sum / arr.length;

	return {
		total,
		sum,
		average,
		max,
		min,
	};
}
