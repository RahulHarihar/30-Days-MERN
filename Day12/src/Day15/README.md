# Day 15 – React + TypeScript Practice

## Dashboard UI with Data Cards (Static JSON)

---

## Problem Statement

Build a **dashboard-style UI** that displays multiple **data cards** using
information from a **static JSON file**.

Each card represents a metric or summary item (e.g., users, revenue, tasks,
status, etc.).

This day focuses on **data-driven UI rendering**, **component composition**, and
**separation of data from presentation**, which are core skills for real-world
frontend applications.

---

## Why Day 15 Makes Sense Now

Based on progress from **Days 1–14**, you have already learned:

- Reusable components (Day 12)
- Props-driven rendering (Day 7, Day 12)
- Conditional UI and validation (Day 14)
- Global state & UI patterns (Day 13)

Day 15 builds naturally on this by introducing:

- **Dashboard layouts**
- **Static data modeling**
- **Rendering multiple components from data**

This mirrors how real dashboards are built before APIs are integrated.

---

## Features

- Static JSON file as the data source
- Reusable `Card` component
- Dashboard layout using grid or flex
- Type-safe data modeling with TypeScript
- Clean separation between:
  - Data
  - UI components
  - Layout

---

## Input

A static JSON (or TS object) containing dashboard metrics.

**Example Data:**

```
[
{
"id": 1,
"title": "Users",
"value": 1200
},
{
"id": 2,
"title": "Revenue",
"value": "$45,000"
},
{
"id": 3,
"title": "Active Tasks",
"value": 32
}
]
```

---

## Output

A dashboard UI displaying each item as a **card**.

**Example UI Concept:**

```
[ Users ] [ Revenue ] [ Active Tasks ]
[ 1200 ] [ $45,000 ] [ 32 ]
```

---

## Constraints

- Use **React + TypeScript only**
- Do NOT fetch data from an API
- Data must come from a static file
- Cards must be rendered using `.map`
- Components must be reusable
- No business logic inside JSX
- Focus on layout, clarity, and structure

---

## Concepts Practiced

- Data-driven rendering
- Reusable UI components
- Dashboard-style layouts
- Type-safe props
- Clean component boundaries
- Preparing UI for future API integration

---

## Project Structure

```
src/
├── Day15/
│ ├── data/
│ │ └── dashboardData.ts
│ │
│ ├── components/
│ │ └── DashboardCard.tsx
│ │
│ └── Dashboard.tsx
│
├── App.tsx
├── main.tsx
```

---

## Component Responsibilities

### `dashboardData.ts`

- Stores static dashboard data
- Acts as a mock backend response
- Strongly typed

---

### `DashboardCard.tsx`

- Displays title and value
- Receives data via props
- Fully reusable

---

### `Dashboard.tsx`

- Imports static data
- Maps over data to render cards
- Handles layout only

---

## How to Run

Start the dev server:

```
npm run dev
```

## Open in browser

```
http://localhost:5173
```

---

---

## Styling Guidelines

- Use simple grid or flex layout
- Keep cards visually consistent
- Focus on readability over animation
- Tailwind CSS recommended (optional)

---

## Goal

- Learn how dashboards are structured
- Separate data from UI
- Strengthen reusable component patterns
- Prepare for API-based dashboards (Day 16+)
- Think in terms of **real application UI**

---

## Notes

- This day intentionally avoids APIs
- Static JSON keeps focus on UI logic
- The same structure will later be reused with:
  - API data
  - Loading states
  - Error handling
  - Filters and charts

---

🚀 **Day 15 is where UI starts to feel like a real product dashboard.**  
This is a key transition from components → applications.
