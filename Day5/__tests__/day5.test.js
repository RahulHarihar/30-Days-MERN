const arrayOperations = require("../JS/utlis");

describe("Array Operations", () => {
	test("handles normal array", () => {
		const result = arrayOperations([10, 5, 98, 14, 30]);

		expect(result).toStrictEqual({
			total: 5,
			sum: 157,
			average: 31.4,
			max: 98,
			min: 5,
		});
	});

	test("handles empty array", () => {
		const result = arrayOperations([]);

		expect(result).toStrictEqual({
			total: 0,
			sum: 0,
			average: 0,
			max: undefined,
			min: undefined,
		});
	});

	test("handles single element", () => {
		const result = arrayOperations([5]);

		expect(result).toStrictEqual({
			total: 1,
			sum: 5,
			average: 5,
			max: 5,
			min: 5,
		});
	});

	test("handles negative values", () => {
		const result = arrayOperations([-5, -45, -10, -15]);

		expect(result).toStrictEqual({
			total: 4,
			sum: -75,
			average: -18.75,
			max: -5,
			min: -45,
		});
	});

	test("handles mixed positive and negative", () => {
		const result = arrayOperations([10, -5, 20, -15]);

		expect(result).toStrictEqual({
			total: 4,
			sum: 10,
			average: 2.5,
			max: 20,
			min: -15,
		});
	});
});
