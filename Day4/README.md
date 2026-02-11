# Day 4 JavaScript & TypeScript Practice

## Problem Statement

Build a reusable utility that processes a list of numbers and determines:

- The largest number
- The smallest number
- The second largest number
- The second smallest number

This problem focuses on **iterative comparison logic**, careful state
tracking,  
and handling edge cases without relying on built-in helpers.

---

## Input

A numeric array provided directly in the code.

**Example:**

```
[10, 5, 20, 8, 15]
```

---

## Output

An object containing:

- Maximum value
- Minimum value
- Second maximum value
- Second minimum value

**Example Output:**

```
{
max: 20,
min: 5,
secondMax: 15,
secondMin: 8
}
```

---

## Constraints

- Do **not** use built-in helpers like:
  - `Math.max`
  - `Math.min`
  - `sort`
- Use loops and basic conditionals only
- Handle edge cases (arrays with less than 2 elements)
- Core logic must be reusable and side-effect free
- Return structured data instead of printing inside utilities

---

## Project Structure

This day is implemented in **both JavaScript and TypeScript**.

### JavaScript

- `index.js`  
  Demonstrates usage of the utility with a predefined array.

- `utils.js`  
  Contains reusable logic to compute min, max, second min, and second max.

---

### TypeScript

- `index.ts`  
  Demonstrates usage with strict typing.

- `utils.ts`  
  Strongly typed reusable utility.

---

### Tests

- `day4.test.js`  
  Unit tests validating the utility logic.

- `day4.test.ts`  
  TypeScript unit tests for validation.

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

- Normal arrays with unique values
- Arrays with duplicate values
- Arrays with negative numbers
- Arrays with only two elements
- Edge cases (empty or single-element arrays)

### Run Tests

```
npm test
```

---

## Goal

- Practice comparison-based logic without shortcuts
- Strengthen understanding of state tracking in loops
- Write defensive, reusable utilities
- Maintain consistency between JavaScript and TypeScript
- Prepare for common interview-style problems

---

## Notes

This day intentionally avoids:

- Sorting-based solutions
- Built-in math helpers

The goal is to **think like the machine**, track values step-by-step, and write
logic that is:

- Predictable
- Testable
- Scalable

Day 4 builds on Days 1–3 and prepares you for more complex numeric and
object-based transformations.
