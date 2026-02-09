export type AnalysisResult = {
	sum: number;
	min: number;
	max: number;
	average: number;
};

export function analyseArray(arr: number[]): AnalysisResult {
	let sum = 0;
	let min = arr[0];
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] > max) max = arr[i];
		if (arr[i] < min) min = arr[i];
	}
	return {
		sum,
		min,
		max,
		average: sum / arr.length,
	};
}
