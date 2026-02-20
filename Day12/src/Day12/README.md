# Day 12 – React + TypeScript Practice

## Reusable Card Component with Props

---

## Problem Statement

Build a **reusable Card component** in **React + TypeScript** and display
multiple cards by passing data through **props**.

This day focuses on **component reusability**, **props-driven UI**, and
designing components that scale as the application grows.

Day 12 is a natural progression after routing (Day 11) and prepares you for
real-world UI composition patterns.

---

## Features

- Reusable `Card` component
- Cards rendered dynamically using props
- Clean, typed component interfaces
- No duplicated UI logic

---

## Input

An array of objects passed to components as props.

**Example Data:**

```
[
{ title: "React", description: "Component-based UI library" },
{ title: "TypeScript", description: "Typed JavaScript for scalability" },
{ title: "Vite", description: "Fast development tooling" }
]
```

---

## Output

Multiple cards rendered on the screen using the same reusable component.

**Example UI Output:**

```
[ React ]
[ TypeScript ]
[ Vite ]
```

Each card displays:

- Title
- Description

---

## Constraints

- Use **React functional components only**
- Use **TypeScript strictly**
- No hard-coded duplicate UI
- Cards must be generated using iteration (`map`)
- Component must be reusable and flexible

---

## Concepts Practiced

- Component reusability
- Props typing
- `map` for dynamic rendering
- UI abstraction
- Clean component APIs

---

## Project Structure

Implemented inside the existing **Vite + React + TypeScript** project.

```
src/
├── components/
│ └── Card.tsx
│
├── data/
│ └── cards.ts
│
├── App.tsx
├── main.tsx
```

---

## Component Responsibilities

### `Card.tsx`

- Displays title and description
- Receives data via props
- Contains no business logic

### `cards.ts`

- Holds static card data
- Keeps data separate from UI

### `App.tsx`

- Iterates over data
- Passes props to `Card` component

---

## How to Run

Start the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## Example Rendering Logic

```
cards.map((card) => (
<Card key={card.title} title={card.title} description={card.description} />
))
```

---

## Testing (Optional for Day 12)

Optional tests can include:

- Rendering multiple cards
- Verifying prop-based rendering
- Snapshot testing (later)

(Current focus is on component design, not testing.)

---

## Goal

- Learn how to design reusable components
- Avoid UI duplication
- Strengthen prop-driven thinking
- Build scalable React UI patterns
- Prepare for lists, grids, and dashboards

---

## Notes

- Styling is intentionally minimal
- Logic and structure are the priority
- This pattern will be reused in:
  - Product cards
  - Profile cards
  - Dashboard widgets

---

🚀 **Day 12 is where your React apps start to look professional.**  
Reusable components are the backbone of scalable front-end systems.
