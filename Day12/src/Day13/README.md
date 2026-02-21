# Day 13 – React + TypeScript Practice

## Global Theme Toggle using Context API

---

## Problem Statement

Build a **global theme toggle (Light / Dark mode)** using **React Context API**
and **TypeScript**.

The theme state should be accessible **across the entire application** without
prop drilling. Users should be able to toggle the theme from any component, and
the UI should update consistently.

This day focuses on **global state management**, **Context API**, and preparing
for scalable React applications.

---

## Features

- Global light/dark theme support
- Theme state shared using Context API
- Type-safe context with TypeScript
- Toggle theme from any component
- Clean separation of logic and UI

---

## Input

User interaction via a toggle button.

**Example Action:**

```
Click "Toggle Theme"
```

---

## Output

- App switches between **Light Mode** and **Dark Mode**
- Theme change applies globally
- UI updates instantly without reload

**Example Output State:**

```
Theme: dark
```

---

## Constraints

- Use **React Context API**
- Use **TypeScript only**
- No prop drilling for theme state
- Theme logic must be centralized
- Components should consume theme via `useContext`

---

## Concepts Practiced

- Context API (`createContext`, `Provider`)
- Custom context hooks
- Global state management
- Type-safe context values
- UI consistency across components

---

## Project Structure

Implemented inside the existing **Vite + React + TypeScript** project.

```
src/
├── context/
│ └── ThemeContext.tsx
│
├── components/
│ └── ThemeToggle.tsx
│
├── App.tsx
├── main.tsx
```

---

## Component Responsibilities

### `ThemeContext.tsx`

- Creates the Theme Context
- Stores theme in state (`light | dark`)
- Exposes toggle function
- Wraps the app with `ThemeProvider`

---

### `ThemeToggle.tsx`

- Consumes theme context
- Triggers theme change
- Displays current theme

---

### `App.tsx`

- Uses global theme state
- Applies theme styles to layout
- Renders shared components

---

## How to Run

Start the development server:

```
npm run dev
```

---

Open in browser:

```
http://localhost:5173
```

---

## Example Usage Pattern

```
const { theme, toggleTheme } = useTheme();
```

---

```
<button onClick={toggleTheme}> Toggle Theme </button>
```

---

## Goal

- Learn how to manage global state in React

- Avoid prop drilling

- Write scalable and maintainable React code

- Understand Context API with TypeScript

- Prepare for auth, user settings, and app-wide data

## Notes

- Styling can be minimal (CSS classes or inline styles)

- Logic and architecture are the priority

- This pattern will be reused for:

- Authentication state

- User preferences

- Language selection

- Feature flags

## 🚀 Day 13 is a major React milestone.

Once Context clicks, React apps become far more manageable and scalable.
