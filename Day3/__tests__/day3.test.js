const countResult = require("../JS/utils");

test("handles mixed numbers correctly", () => {
	const result = countResult([10, -5, 0, 20, -15, 0, 30]);

	expect(result).toEqual({
		totalCount: 7,
		sum: 40,
		positiveNumbers: 3,
		negativeNumbers: 2,
		zerosCount: 2,
	});
});

test("handles empty array", () => {
	const result = countResult([]);

	expect(result).toEqual({
		totalCount: 0,
		sum: 0,
		positiveNumbers: 0,
		negativeNumbers: 0,
		zerosCount: 0,
	});
});

test("only positive numbers", () => {
	const result = countResult([1, 2, 3, 4, 5]);

	expect(result).toEqual({
		totalCount: 5,
		sum: 15,
		positiveNumbers: 5,
		negativeNumbers: 0,
		zerosCount: 0,
	});
});

test("only negative numbers", () => {
	const result = countResult([-5, -9, -2, -6, -4]);

	expect(result).toEqual({
		totalCount: 5,
		sum: -26,
		positiveNumbers: 0,
		negativeNumbers: 5,
		zerosCount: 0,
	});
});

test("only zeros", () => {
	const result = countResult([0, 0, 0, 0]);

	expect(result).toEqual({
		totalCount: 4,
		sum: 0,
		positiveNumbers: 0,
		negativeNumbers: 0,
		zerosCount: 4,
	});
});

test("single value", () => {
	const result = countResult([5]);

	expect(result).toEqual({
		totalCount: 1,
		sum: 5,
		positiveNumbers: 1,
		negativeNumbers: 0,
		zerosCount: 0,
	});
});
