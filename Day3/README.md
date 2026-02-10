# Day 3 JavaScript & TypeScript Practice

## Problem Statement

Build a reusable utility that analyzes a list of numbers and determines:

- The total count of numbers
- The sum of all numbers
- The count of positive numbers
- The count of negative numbers
- The count of zeros

This problem focuses on writing clean, reusable logic and returning structured
data instead of printing values directly.

---

## Input

A numeric array provided directly in the code.

Example: [10, -5, 0, 20, -15, 0, 30]

---

## Output

An object containing:

- Total count of numbers
- Sum of all numbers
- Count of positive numbers
- Count of negative numbers
- Count of zero values

Example output: { total: 7, sum: 40, positiveCount: 3, negativeCount: 2,
zeroCount: 2 }

---

## Constraints

- Do not use array helper methods like filter, reduce, or map
- Use loops and basic conditionals
- Focus on clean and readable logic
- The core logic must be reusable

---

## Project Structure

This day is implemented in both JavaScript and TypeScript.

### JavaScript

- index.js  
  Demonstrates usage of the utility with a predefined array.

- utils.js  
  Contains the reusable logic for analyzing numbers.

- **tests**  
  Unit tests validating the core logic.

### TypeScript

- index.ts  
  Demonstrates usage with proper typing.

- utils.ts  
  Contains strongly typed reusable logic.

- **tests**  
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

This project includes unit tests written using Jest.

Tests focus on:

- Mixed positive, negative, and zero values
- Empty arrays
- Arrays with only one type of number
- Correct aggregation logic

### Run Tests

```
npm test
```

---

## Goal

- Practice writing reusable utilities
- Return structured data instead of console-based logic
- Strengthen understanding of loops and conditionals
- Build consistency across JavaScript and TypeScript

---

## Notes

This day intentionally removes terminal-based user input to encourage:

- Simpler APIs
- Testable code
- Better separation of logic and execution

Day 3 builds a strong foundation for upcoming object-based and real-world
problems.
