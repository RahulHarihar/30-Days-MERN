Day 5 JavaScript & TypeScript Practice

## Problem Statement

Build a reusable utility that processes a list of numbers and determines:

- The total count of numbers
- The sum of all numbers
- The average value
- The largest number
- The smallest number

This problem focuses on **combining multiple aggregations in a single pass**,
writing clean and readable logic, and returning structured data instead of
printing values directly.

---

## Input

A numeric array provided directly in the code.

**Example:**

```
[10, 20, 30, 40, 50]
```

---

## Output

An object containing:

- Total count of numbers
- Sum of all numbers
- Average value
- Maximum value
- Minimum value

**Example Output:**

```
{
count: 5,
sum: 150,
average: 30,
max: 50,
min: 10
}
```

---

## Constraints

- Do **not** use built-in helpers like:
  - `reduce`
  - `Math.max`
  - `Math.min`
- Use loops and basic conditionals only
- Handle edge cases (empty arrays)
- Core logic must be reusable and side-effect free
- Return structured data instead of printing inside utilities

---

## Project Structure

This day is implemented in **both JavaScript and TypeScript**.

### JavaScript

- `index.js`  
  Demonstrates usage of the utility with a predefined array.

- `utils.js`  
  Contains reusable logic to compute count, sum, average, min, and max.

- `tests`  
  Unit tests validating the utility logic.

---

### TypeScript

- `index.ts`  
  Demonstrates usage with strict typing.

- `utils.ts`  
  Strongly typed reusable utility.

- `tests`  
  TypeScript unit tests for validation.

---

## How to Run

### JavaScript

```
node index.js
```

### TypeScript

```
npx ts-node index.ts
```

---

## Testing

This project includes unit tests written using **Jest**.

### Tests Focus On

- Normal arrays with multiple values
- Arrays with negative numbers
- Arrays with a single value
- Empty arrays
- Correct average calculation

### Run Tests

```
npm test
```

---

## Goal

- Practice combining multiple calculations in one loop
- Strengthen understanding of aggregation logic
- Write clean, reusable utilities
- Maintain parity between JavaScript and TypeScript implementations
- Improve confidence with numeric edge cases

---

## Notes

This day emphasizes:

- One-pass algorithms
- Defensive programming
- Returning meaningful data structures
- Writing logic that scales without relying on shortcuts

Day 5 builds toward real-world data processing and analytics-style problems.
