export type EvenOddResult = {
	evenCount: number;
	oddCount: number;
	evenArr: number[];
	oddArr: number[];
};

export function evenOddResult(arr: number[]): EvenOddResult {
	let evenCount = 0;
	let oddCount = 0;

	const evenArr: number[] = [];
	const oddArr: number[] = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			evenCount++;
			evenArr.push(arr[i]);
		} else {
			oddCount++;
			oddArr.push(arr[i]);
		}
	}

	return {
		evenCount,
		oddCount,
		evenArr,
		oddArr,
	};
}
