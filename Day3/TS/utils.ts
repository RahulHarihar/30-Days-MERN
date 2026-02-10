export type CountResult = {
	totalCount: number;
	sum: number;
	positiveNumbers: number;
	negativeNumbers: number;
	zerosCount: number;
};

export function countResult(arr: number[]): CountResult {
	let totalCount = 0;
	let sum = 0;
	let zerosCount = 0;
	let positiveNumbers = 0;
	let negativeNumbers = 0;

	for (let i = 0; i < arr.length; i++) {
		totalCount++;
		sum += arr[i];

		if (arr[i] === 0) {
			zerosCount++;
		} else if (arr[i] > 0) {
			positiveNumbers++;
		} else {
			negativeNumbers++;
		}
	}

	return {
		totalCount,
		sum,
		positiveNumbers,
		negativeNumbers,
		zerosCount,
	};
}
