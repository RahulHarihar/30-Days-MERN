# Day 14 – React + TypeScript Practice

## Form Handling with Validation & Error Messages

---

## Problem Statement

Build a **form with validation and user-friendly error messages** using  
**React + TypeScript**.

The form should validate user input **before submission** and clearly
communicate what went wrong when input is invalid.

This day focuses on **controlled components**, **form state management**, and
**basic validation logic**, which are essential skills for real-world frontend
applications.

---

## Why Day 14 Matters

Up to Day 13, you have covered:

- Local and global state (`useState`, Context API)
- Component composition
- Side effects (`useEffect`)
- Real-world UI patterns (theme toggle)

Now you move into: 👉 **Forms — the backbone of user interaction**  
👉 **Validation logic**  
👉 **Error handling and UX feedback**

Almost every application includes forms:

- Login / Signup
- Contact forms
- Settings pages
- Checkout flows

This makes Day 14 a **core frontend milestone**.

---

## Features

- Controlled form inputs
- Validation on submit
- Inline error messages
- Type-safe form state
- Clean separation of logic and UI
- Prevent submission on invalid input

---

## Example Form Fields

Example fields for this day:

- Name (required)
- Email (required, valid format)
- Password (minimum length)

> The exact fields are flexible — focus is on validation logic, not styling.

---

## Input

User enters values into form fields.

**Example Input:**

```
Name: ""
Email: "test@"
Password: "123"
```

---

## Output

- Form **does not submit**
- Clear error messages displayed below each field

**Example Errors:**

```
Name is required
Email must be a valid email address
Password must be at least 6 characters
```

---

## Constraints

- Use **React + TypeScript only**
- Use controlled inputs (`value` + `onChange`)
- No external form libraries (Formik, React Hook Form)
- Validation logic must be explicit and readable
- Errors should be user-friendly
- No direct DOM manipulation

---

## Concepts Practiced

- Controlled components
- Form state management
- Validation using conditionals
- Error state handling
- Type-safe event handling
- Preventing invalid submissions

---

## Project Structure

Implemented inside the existing **Vite + React + TypeScript** setup.

```
src/
├── components/
│ └── Form.tsx
│
├── App.tsx
├── main.tsx
```

---

## Component Responsibilities

### `Form.tsx`

- Manages form state
- Validates inputs
- Stores and displays error messages
- Handles submit logic

---

### `App.tsx`

- Renders the form
- Acts as the application entry point

---

## Example Validation Logic

```
if (!email.includes("@")) {
setError("Invalid email address");
}
```

> Keep validation simple and readable for this day.

---

## How to Run

Start the development server:

```
npm run dev
```

## Open in browser

```
http://localhost:5173
```

---

## Testing (Optional for Day 14)

Optional tests can include:

- Empty form submission
- Invalid email format
- Successful submission with valid data

> Focus today is on understanding form flow, not exhaustive testing.

---

## Goal

- Learn how to build and validate forms in React
- Improve user experience with clear error feedback
- Write predictable, readable validation logic
- Strengthen TypeScript usage with events and state
- Prepare for authentication and data submission flows

---

## Notes

- Styling can remain minimal
- Logic and correctness matter more than visuals
- Avoid over-engineering validation
- This foundation will be reused for:
  - Login & Signup forms
  - Profile updates
  - Real backend integrations

---

🚀 **Day 14 bridges UI interaction and real-world application behavior.**  
Mastering forms means mastering frontend development.
