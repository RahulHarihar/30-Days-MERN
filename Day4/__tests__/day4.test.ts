import { findInArray } from "../TS/utils";

test("handles array correctly", () => {
	const result = findInArray([10, 5, 20, 8, 15]);

	expect(result).toStrictEqual({
		min: 5,
		max: 20,
		secondMin: 8,
		secondMax: 15,
	});
});

test("handles empty array", () => {
	const result = findInArray([]);

	expect(result).toStrictEqual({
		min: undefined,
		max: undefined,
		secondMin: undefined,
		secondMax: undefined,
	});
});

test("handles single element array", () => {
	const result = findInArray([10]);

	expect(result).toStrictEqual({
		min: 10,
		max: 10,
		secondMin: undefined,
		secondMax: undefined,
	});
});

test("handles duplicates", () => {
	const result = findInArray([5, 5, 5, 5]);

	expect(result).toStrictEqual({
		min: 5,
		max: 5,
		secondMin: undefined,
		secondMax: undefined,
	});
});

test("handles negative numbers", () => {
	const result = findInArray([-5, -15, -20, -36]);

	expect(result).toStrictEqual({
		min: -36,
		max: -5,
		secondMin: -20,
		secondMax: -15,
	});
});
