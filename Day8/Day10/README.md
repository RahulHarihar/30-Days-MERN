# Day 10 – React + TypeScript Practice

## Simple Todo Application

---

## Problem Statement

Build a **simple Todo application** using **React and TypeScript** that allows
users to:

- Add new todos
- Mark todos as completed
- Delete todos

This day focuses on **state management**, **list rendering**, and **event
handling** in React while keeping the logic clean and scalable.

Day 10 is a **major milestone** because it combines everything learned so far:
state, props, controlled inputs, conditional rendering, and list updates.

---

## Features

- Add a new todo using an input field
- Display todos in a list
- Toggle todo completion (completed / not completed)
- Delete a todo from the list
- Real-time UI updates using React state

---

## Input

- User-entered text via a controlled input field

**Example Input:**

```
Learn React Hooks
Build Todo App
Refactor Components
```

---

## Output

- A dynamic list of todos displayed on the screen
- Completed todos visually distinguished (e.g., strikethrough or style change)

**Example State Output:**

```
[ ] Learn React Hooks
[x] Build Todo App
[ ] Refactor Components
```

---

## Constraints

- Use **React functional components only**
- Use **TypeScript strictly**
- Do not use external state management libraries
- No backend or database (in-memory state only)
- Focus on clarity and readability over UI complexity

---

## Concepts Practiced

- `useState` for managing todos
- Controlled inputs
- Rendering lists with `map`
- Updating state immutably
- Passing handlers via props
- Conditional rendering based on state

---

## Project Structure

This day is implemented inside the existing **Vite + React + TypeScript**
project.

```
src/
├── components/
│ ├── TodoInput.tsx
│ ├── TodoItem.tsx
│ └── TodoList.tsx
│
├── App.tsx
├── main.tsx
```

---

## Component Responsibilities

### `TodoInput.tsx`

- Handles text input
- Triggers add-todo action

### `TodoItem.tsx`

- Displays individual todo
- Handles complete and delete actions

### `TodoList.tsx`

- Renders the list of todos
- Manages iteration logic

### `App.tsx`

- Holds the main todo state
- Coordinates data flow between components

---

## How to Run

Start the development server:

```
npm run dev
```

Open the browser at:

```
http://localhost:5173
```

---

## Goal

- Understand real-world React state flow
- Practice CRUD-style UI interactions
- Build confidence with TypeScript in React
- Prepare for more complex apps (forms, APIs, reducers)

---

## Notes

- This Todo app is intentionally **simple**
- No persistence (localStorage / backend) yet
- Styling is minimal by design

Future days will extend this with:

- Local storage
- Reducers
- Performance optimizations
- API integration

---

🎯 **Day 10 marks the transition from practice problems to real React
applications.**  
You are now building components that mirror real production patterns.
