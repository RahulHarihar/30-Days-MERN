# Day 8 – React + TypeScript Practice

## Fetching Data & Rendering Lists

---

## Problem Statement

Build a React component that **fetches data from an external API** and displays
the results as a list.

This day introduces **asynchronous data handling in React**, focusing on how
real-world applications load and render external data.

Compared to earlier days (state, props, controlled inputs), Day 8 moves from
**local state** to **remote state**.

---

## Why This Day (Progress Check)

### Based on Days 1–7, you already know:

- JavaScript & TypeScript fundamentals
- Writing reusable utilities
- Returning structured data
- Testing logic with Jest
- React basics:
  - Components
  - `useState`
  - Props
  - State lifting
  - Controlled inputs

### What Day 8 Adds (Correct Next Step)

- `useEffect` for side effects
- Fetching data asynchronously
- Handling loading and error states
- Rendering lists using `.map()`
- Understanding component lifecycle basics

✅ This makes **API fetching the correct difficulty jump** for Day 8.

---

## Objective

Create a React component that:

- Fetches data from a public API
- Stores the response in state
- Displays the data in a list
- Handles loading and error states cleanly

---

## Input

No manual user input.

Data is fetched from an external API.

**Example API (suggested):**

```
https://jsonplaceholder.typicode.com/posts
```

---

## Output

A rendered list in the browser showing fetched data.

**Example UI Output:**

```
Loading...

• Post Title 1
• Post Title 2
• Post Title 3
```

---

## Or, in case of error:

```
Failed to load data
```

---

## Constraints

- Use **TypeScript only**
- Do NOT use external state libraries
- Use React hooks (`useState`, `useEffect`)
- Keep logic inside the component
- Clean and readable code
- Avoid unnecessary re-renders

---

## Core Concepts Practiced

- `useEffect` for API calls
- Asynchronous JavaScript (`fetch`, `async/await`)
- Managing multiple states:
  - loading
  - data
  - error
- Rendering lists with `map`
- TypeScript typing for API responses

---

## Project Structure

```
Day8/
├── src/
│ ├── components/
│ │ └── DataList.tsx
│ ├── App.tsx
│ └── main.tsx
├── README.md
```

---

## Component Responsibilities

### `DataList.tsx`

- Fetch data on component mount
- Store response in state
- Display loading state
- Display error state
- Render fetched list

---

## How to Run

Start the React development server:

```
npm run dev
```

---

## Goal

- Understand how React handles side effects
- Learn how real applications fetch data
- Build confidence working with APIs
- Prepare for:
  - Forms + API submission
  - Search & filtering
  - Pagination
  - Real MERN backend integration

---

## Notes

This day intentionally avoids:

- Redux / Zustand
- Custom hooks
- Complex abstractions

The focus is on **clarity over cleverness**.

If you understand Day 8 well, you are officially past “beginner React” 🚀

---

**Day 9 will build on this with interaction + data flow.**
