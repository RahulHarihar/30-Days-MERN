# Day 6 – React + TypeScript Fundamentals

## Problem Statement

Build a simple **React application using TypeScript** that implements a
**Counter component** with the ability to:

- Increment the count
- Decrement the count
- Reset the count to zero

This problem introduces **React fundamentals** while reinforcing concepts
already practiced in JavaScript and TypeScript such as:

- State management
- Pure logic vs UI
- Reusability
- Predictable data flow

---

## Input

User interaction through UI buttons:

- `+` button → Increment count
- `-` button → Decrement count
- `Reset` button → Reset count to `0`

---

## Output

The UI dynamically displays:

- The current count value
- Updated count after each action

**Example UI Behavior:**

```
Count: 0
[ + ] [ - ] [ Reset ]

Click + → Count: 1
Click - → Count: 0
Click Reset → Count: 0
```

---

## Constraints

- Use **React with TypeScript only**
- Use functional components
- Use the `useState` hook
- Do not manipulate the DOM manually
- Keep logic predictable and readable
- No external state libraries (Redux, Zustand, etc.)

---

## Project Structure

```
Day6/
│
├── src/
│    ├── components/
│    │    ├── Counter.tsx # Counter component
│    │
│    ├── App.tsx # Root component
│    └── main.tsx # Entry point
│
├── public/
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## Key Concepts Practiced

- React functional components
- `useState` hook
- Event handling in React
- TypeScript typing in React
- One-way data flow
- Component re-rendering

---

### Create React App (Vite – Recommended)

```
npm create vite@latest ./ --template react-ts
cd Day6
npm install
npm run dev
```

## How to Run

```
npm run dev
```
