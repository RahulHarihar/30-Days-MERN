const { separateEvenOdd } = require("../JS/utils");

test("separates even and odd numbers correctly", () => {
	const result = separateEvenOdd([10, 21, 34, 45, 56, 67]);
	expect(result.evenCount).toBe(3);
	expect(result.oddCount).toBe(3);
	expect(result.evenArr).toEqual([10, 34, 56]);
	expect(result.oddArr).toEqual([21, 45, 67]);
});

test("handles empty array", () => {
	const result = separateEvenOdd([]);
	expect(result.evenCount).toBe(0);
	expect(result.oddCount).toBe(0);
	expect(result.evenArr).toEqual([]);
	expect(result.oddArr).toEqual([]);
});

test("handles array with only even numbers", () => {
	const result = separateEvenOdd([2, 4, 6, 8]);
	expect(result.evenCount).toBe(4);
	expect(result.oddCount).toBe(0);
	expect(result.evenArr).toEqual([2, 4, 6, 8]);
	expect(result.oddArr).toEqual([]);
});

test("handles array with only odd numbers", () => {
	const result = separateEvenOdd([1, 3, 5, 7]);
	expect(result.evenCount).toBe(0);
	expect(result.oddCount).toBe(4);
	expect(result.evenArr).toEqual([]);
	expect(result.oddArr).toEqual([1, 3, 5, 7]);
});

test("handles array with negative numbers", () => {
	const result = separateEvenOdd([-10, -21, -34, -45, -56, -67]);
	expect(result.evenCount).toBe(3);
	expect(result.oddCount).toBe(3);
	expect(result.evenArr).toEqual([-10, -34, -56]);
	expect(result.oddArr).toEqual([-21, -45, -67]);
});

test("handles array with zero", () => {
	const result = separateEvenOdd([0, 1, 2, 3]);
	expect(result.evenCount).toBe(2);
	expect(result.oddCount).toBe(2);
	expect(result.evenArr).toEqual([0, 2]);
	expect(result.oddArr).toEqual([1, 3]);
});

test("handles array with duplicate numbers", () => {
	const result = separateEvenOdd([10, 10, 21, 21, 34, 34]);
	expect(result.evenCount).toBe(4);
	expect(result.oddCount).toBe(2);
	expect(result.evenArr).toEqual([10, 10, 34, 34]);
	expect(result.oddArr).toEqual([21, 21]);
});
