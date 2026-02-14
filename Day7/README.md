# Day 7 – React + TypeScript Fundamentals (Props & Controlled Inputs)

## Problem Statement

Build a simple **React application using TypeScript** that demonstrates:

- Passing data using **props**
- Handling **user input**
- Managing state in a parent component
- Updating UI based on user interaction

This day focuses on understanding **data flow in React** rather than UI
complexity.

---

## Objective

Create a reusable **Input + Display** system where:

- The user types text into an input field
- The input value is stored in React state
- The value is passed to a child component via props
- The child component displays the value dynamically

---

## Input

A text value entered by the user in an input field.

**Example:**

```
Hello React
```

---

## Output

The UI updates instantly to reflect the input value.

**Example UI Behavior:**

```
Input: Hello React
Display: You typed: Hello React
```

---

## Constraints

- Use **React with TypeScript only**
- Use functional components
- Use `useState` for state management
- Use **controlled inputs**
- Do not use external state libraries
- Components must be reusable
- No direct DOM manipulation

---

## Concepts Covered

- React functional components
- `useState` hook
- Props (type-safe props with TypeScript)
- Controlled inputs
- Parent → Child data flow
- Separation of concerns

---

## Suggested Component Structure

```
src/
├── components/
│ ├── TextInput.tsx
│ └── DisplayText.tsx
├── App.tsx
└── main.tsx
```

---

## Example Component Responsibilities

### App.tsx

- Holds the main state (`text`)
- Passes state and handlers to child components

### TextInput.tsx

- Receives value and `onChange` handler via props
- Updates state based on user input

### DisplayText.tsx

- Receives text via props
- Displays it on the screen

---

## How to Run

```
npm install
npm run dev
```

---

## Goal

- Understand how **props work**
- Learn how **inputs are controlled**
- Build confidence in React state flow
- Prepare for lifting state and list rendering
- Strengthen TypeScript + React integration

---

## Notes

This day intentionally avoids:

- Styling focus
- Complex UI logic
- Multiple states

The purpose is to **master the foundation** before moving forward.

> If you understand Day 7 deeply,  
> **80% of beginner React confusion disappears.**

---

## What’s Next (Day 8 Preview)

- Lifting state up
- Component composition
- Multiple inputs & shared state
- Real-world React patterns
