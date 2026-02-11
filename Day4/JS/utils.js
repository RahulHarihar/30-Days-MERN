function findInArray(arr) {
	if (arr.length === 0) {
		return {
			min: undefined,
			max: undefined,
			secondMin: undefined,
			secondMax: undefined,
		};
	}

	if (arr.length === 1) {
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

	for (let value of arr) {
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

module.exports = findInArray;
