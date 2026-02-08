const calculateStats = require("../utils");

test("calculate sum, max, min, and average correctly", () => {
	const result = calculateStats([10, 20, 30, 40, 50]);

	expect(result.sum).toBe(150);
	expect(result.max).toBe(50);
	expect(result.min).toBe(10);
	expect(result.average).toBe(30);
});
