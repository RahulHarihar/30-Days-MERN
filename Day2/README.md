# Day 2 JavaScript and TypeScript Practice

## Problem Statement

Build a program that takes an array of integers and performs the following
operations:

- Count the number of even elements
- Count the number of odd elements
- Store all even numbers in a separate array
- Store all odd numbers in a separate array

## Input

The program supports two input methods:

1. Pre-defined array inside the code  
   Example:

```
[10, 21, 34, 45, 56, 67]
```

2. User-defined input from the terminal  
   Example:

```
10 21 34 45 56 67
```

## Output

```
Even Count: 3
Odd Count: 3
Even Numbers: [10, 34, 56]
Odd Numbers: [21, 45, 67]
```

## Constraints

- Do not use built-in methods like filter
- Use loops and conditional logic
- Write clean and readable code

## Folder Structure

```
Day2/
├── tests/
│ ├── day2.test.js
│ └── day2.test.ts
├── JS/
│ ├── index.js
│ ├── userInput.js
│ └── utils.js
├── TS/
│ ├── index.ts
│ ├── userInput.ts
│ └── utils.ts
└── README.md
```

## Files Overview

### JavaScript

- index.js  
  Uses a pre-defined array to test the even and odd logic.

- userInput.js  
  Accepts space-separated integers from the terminal.

- utils.js  
  Contains the core logic for separating even and odd numbers.

### TypeScript

- index.ts  
  Uses a pre-defined array with TypeScript typing.

- userInput.ts  
  Accepts terminal input using Node.js readline with type safety.

- utils.ts  
  Contains the typed logic for separating even and odd numbers.

## How to Run

### JavaScript

# Run with pre-defined input:

```
node JS/index.js
```

# Run with user input:

```
node JS/userInput.js
```

### TypeScript

# Run with pre-defined input:

```
npx ts-node TS/index.ts
```

# Run with user input:

```
npx ts-node TS/userInput.ts
```

## Testing

Unit tests are written using Jest to validate the shared logic.

### How to Run Tests

From the root of the repository:

```
npm test
```

### What Is Tested

- Even number detection
- Odd number detection
- Correct counting of even and odd numbers
- Proper separation into arrays

## Goal

Practice conditional logic, loops, and array traversal while reinforcing the
same concepts in both JavaScript and TypeScript.
