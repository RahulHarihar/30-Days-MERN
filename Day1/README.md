# Day 1 JavaScript Practice

## Problem Statement

Build a program that takes an array of integers and performs the following
operations:

- Calculate the sum of all numbers
- Find the maximum number
- Find the minimum number
- Calculate the average of the numbers

## Input

The program supports two input methods:

1. Pre-defined array inside the code  
   Example: [10, 20, 30, 40, 50]

2. User-defined input from the terminal  
   Example: 10 20 30 40 50

## Output

Sum: 150  
Maximum: 50  
Minimum: 10  
Average: 30

## Constraints

- Do not use built-in functions like Math.max or Math.min
- Use loops and basic logic
- Write clean and readable code

## Files

- index.js  
  Uses a pre-defined array written directly in the code. Suitable for quick
  testing and understanding the logic.

- userInput.js  
  Accepts space-separated integers from the terminal using Node.js input.
  Suitable for practicing real-world input handling.

- utils.js  
  Contains the core calculation logic shared by both index.js and userInput.js.

- **tests**  
  Contains unit tests for validating the core logic.

## How to Run

### Run with Pre-defined Input

```
node index.js
```

### Run with User Input

```
node userInput.js
Then enter values like: 10 20 30 40 50
```

## Testing

This project includes unit tests to verify the core logic of the program.

The tests are written using Jest and focus on validating the calculation logic
used by both index.js and userInput.js.

### How to Run Tests

From the root of the repository, run:

```
npm test
```

### What Is Tested

- Sum calculation
- Maximum value
- Minimum value
- Average calculation

## Goal

Practice JavaScript fundamentals including loops, conditionals, and basic
arithmetic operations.
