export type findInArray = {
	max: number | undefined;
	min: number | undefined;
	secondMin: number | undefined;
	secondMax: number | undefined;
};

export function findInArray(arr: number[]): findInArray {
	if (arr.length < 2) {
		return {
			min: arr[0],
			max: arr[0],
			secondMin: undefined,
			secondMax: undefined,
		};
	}

	let min = Infinity;
	let secondMin = Infinity;

	let max = -Infinity;
	let secondMax = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];

		if (value < min) {
			secondMin = min;
			min = value;
		} else if (value > min && value < secondMin) {
			secondMin = value;
		}

		if (value > max) {
			secondMax = max;
			max = value;
		} else if (value < max && value > secondMax) {
			secondMax = value;
		}
	}

	return {
		min,
		max,
		secondMin: secondMin === Infinity ? undefined : secondMin,
		secondMax: secondMax === -Infinity ? undefined : secondMax,
	};
}
