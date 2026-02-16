# Day 9 – React Search Filter (TypeScript)

## Problem Statement

Build a **real-time search filter** for a list of items that updates results
**as the user types**.

This day builds directly on **Day 8 (data fetching with `useEffect`)** and
introduces **derived state**, **controlled inputs**, and **client-side
filtering** — all critical skills for real-world React applications.

---

## Why This Is the Right Next Step

Based on progress from Days 1–8:

- Days 1–5: Core JavaScript & TypeScript logic
- Day 6: React state with `useState`
- Day 7: Props and component communication
- Day 8: Side effects, API calls, loading & error states

➡️ **Day 9 naturally evolves Day 8** by adding:

- User interaction
- Dynamic UI updates
- Filtering logic without refetching data

This mirrors how real apps work.

---

## What You Will Build

A React application that:

- Fetches a list of items (posts/users/etc.)
- Displays the list
- Provides a search input
- Filters results in **real time** as the user types
- Uses **TypeScript only**

---

## Input

- Data fetched from an API (or predefined list)
- User input via a text field

**Example search input:**

```
react
```

---

## Output

- A dynamically filtered list
- Items that match the search term are shown
- Non-matching items are hidden instantly

---

## Core Concepts Practiced

- Controlled inputs
- Derived state (filtered data)
- Case-insensitive search
- Efficient rendering
- Clean separation of logic and UI
- Type-safe React components

---

## Constraints

- Do NOT refetch data on every keystroke
- Filtering must be done on already fetched data
- No external state management libraries
- Use basic array methods (`filter`, `includes`)
- Components must be reusable
- Logic should be readable and testable

---

## Project Structure

This day is implemented using **React + TypeScript** only.

```
Day9/
├── src/
│ ├── Components/
│ │ ├── SearchInput.tsx
│ │ ├── DataList.tsx
│ │
│ ├── App.tsx
│ └── main.tsx
│ └── README.md
```

---

## Component Responsibilities

### `SearchInput.tsx`

- Controlled input component
- Accepts search text and updater via props

### `DataList.tsx`

- Receives data and search term
- Filters and displays results

### `App.tsx`

- Holds shared state
- Connects search input with filtered list

---

## Example Flow

1. App fetches data once (Day 8 logic reused)
2. User types in search box
3. Search state updates
4. List re-renders with filtered results
5. No API calls are repeated

---

## How to Run

```
npm run dev
```
---

## Goal

 - Learn how to build interactive UIs

 - Understand derived state vs source state

 - Strengthen React + TypeScript fundamentals
  
--- 

## Prepare for:
 - 
 - Debouncing
  
 - Memoization
 
 - Performance optimizations
  
 - Real-world forms and dashboards

---

## Notes

 - This day intentionally keeps logic simple

 - Performance optimizations come later

 - Focus is on clarity and correctness

 - Filtering on the client is a common interview pattern

---

## Progress Checkpoint

 - By the end of Day 9, you should be comfortable with:

 - Thinking in React data flow

 - Connecting user input to UI changes

 - riting clean, typed React components

 - Day 9 completes the foundation phase of your React journey.
   From Day 10 onward, complexity increases 🚀