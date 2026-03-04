# Day 24 – Connecting React Frontend to Express Backend

## Full Stack Integration (MERN Fundamentals)

---

## Problem Statement

Connect the **React frontend** to the Express + MongoDB backend built across
Days 20–23.

This day introduces **full stack integration responsibilities**:

- Making HTTP requests from React to Express using fetch
- Managing API response state in React components
- Handling loading and error states in the UI
- Keeping frontend and backend concerns cleanly separated

The focus is on **integration thinking**, not UI design.

---

## How Day 24 Builds on Previous Progress

By the end of Day 23, you already had:

- A fully working Express + MongoDB backend
- Full CRUD REST APIs for todos
- Consistent response shape across all routes
- Clean TypeScript types on the backend

Day 24 takes the **next natural step**: ➡️ moving from _"backend works in
Postman"_  
➡️ to _"backend works in a real React UI"_

This is the moment the MERN stack becomes a complete system.

---

## Features Implemented

- Fetch all todos from the backend on page load
- Create a new todo via a form
- Mark a todo as completed via a toggle
- Delete a todo from the UI
- Loading state while requests are in flight
- Error state when requests fail
- CORS configured on the backend to accept React dev server requests

---

## What Changes from Day 23

### Before (Day 23) — tested in Postman only

```
POST   http://localhost:3000/todos/create
GET    http://localhost:3000/todos
PUT    http://localhost:3000/todos/:id
DELETE http://localhost:3000/todos/:id
```

### After (Day 24) — consumed from React

```typescript
const fetchTodos = async () => {
	const res = await fetch("http://localhost:3000/todos");
	const json = await res.json();
	setTodos(json.data);
};
```

---

## Concepts Introduced

### CORS (Cross-Origin Resource Sharing)

When React (port 5173) talks to Express (port 3000), the browser blocks the
request by default. You need to tell Express to allow it.

```typescript
import cors from "cors";
app.use(cors({ origin: "http://localhost:5173" }));
```

### fetch API

The browser-native way to make HTTP requests. Returns a Promise that resolves to
a Response object.

```typescript
const res = await fetch(url, {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify(data),
});
const json = await res.json();
```

### Loading and Error States

Every async operation needs three states represented in the UI — loading,
success, and error. Never leave the user staring at a blank screen.

```typescript
const [todos, setTodos] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
```

---

## Constraints

- No external HTTP libraries (no axios) — use native fetch only
- No state management libraries — useState and useEffect only
- CORS must be configured on the backend, not the frontend
- Focus on integration, not UI styling

---

## Concepts Practiced

- Connecting React to a REST API
- useEffect for data fetching on mount
- useState for managing async data, loading, and error
- fetch with GET, POST, PUT, DELETE
- CORS configuration in Express
- Keeping API logic in a separate service file

---

## Project Structure

```
Day24/
├── backend/
│   ├── src/
│   │   ├── app.ts
│   │   ├── server.ts
│   │   ├── db.ts
│   │   ├── models/
│   │   │   └── Todo.ts
│   │   └── routes/
│   │       └── todoRoutes.ts
│   ├── .env
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── main.tsx
    │   ├── App.tsx
    │   ├── types/
    │   │   └── todo.ts
    │   ├── services/
    │   │   └── todoService.ts
    │   └── components/
    │       ├── TodoList.tsx
    │       ├── TodoItem.tsx
    │       └── TodoForm.tsx
    ├── index.html
    ├── package.json
    └── vite.config.ts
```

---

## File Responsibilities

**backend/src/app.ts**

- Initialize Express app
- Register CORS middleware
- Mount routes

**frontend/src/services/todoService.ts**

- All fetch calls to the backend
- Single place to change the base URL

**frontend/src/App.tsx**

- Top level state — todos, loading, error
- Pass data and handlers down to components

**frontend/src/components/TodoForm.tsx**

- Controlled form for creating a new todo

**frontend/src/components/TodoList.tsx**

- Renders the list of todos

**frontend/src/components/TodoItem.tsx**

- Single todo row with toggle and delete

---

## How to Run

### Backend

```
cd backend
npm install
npm run dev
```

### Frontend

```
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`  
Backend runs on `http://localhost:3000`

---

## Implementation

---

### Backend — `src/app.ts` (updated with CORS)

```typescript
import express, { Application, Request, Response } from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

const app: Application = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/health", (_req: Request, res: Response) => {
	res.status(200).json({ status: "ok" });
});

export default app;
```

Install the cors package:

```
npm install cors
npm install -D @types/cors
```

---

### Frontend — `src/types/todo.ts`

```typescript
export interface Todo {
	_id: string;
	title: string;
	description: string;
	completed: boolean;
	priority: "low" | "medium" | "high";
	createdAt: string;
	updatedAt: string;
}

export interface CreateTodoPayload {
	title: string;
	description?: string;
	priority?: "low" | "medium" | "high";
}
```

---

### Frontend — `src/services/todoService.ts`

```typescript
import { Todo, CreateTodoPayload } from "../types/todo";

const BASE_URL = "http://localhost:3000/todos";

export const getAllTodos = async (): Promise<Todo[]> => {
	const res = await fetch(BASE_URL);
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
	return json.data;
};

export const createTodo = async (payload: CreateTodoPayload): Promise<Todo> => {
	const res = await fetch(`${BASE_URL}/create`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
	});
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
	return json.data;
};

export const updateTodo = async (
	id: string,
	updates: Partial<Todo>,
): Promise<Todo> => {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(updates),
	});
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
	return json.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
	const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
};
```

---

### Frontend — `src/App.tsx`

```typescript
import { useEffect, useState } from "react";
import { Todo, CreateTodoPayload } from "./types/todo";
import { getAllTodos, createTodo, updateTodo, deleteTodo } from "./services/todoService";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const data = await getAllTodos();
      setTodos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (payload: CreateTodoPayload) => {
    try {
      const newTodo = await createTodo(payload);
      setTodos((prev) => [newTodo, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create todo");
    }
  };

  const handleToggle = async (todo: Todo) => {
    try {
      const updated = await updateTodo(todo._id, { completed: !todo.completed });
      setTodos((prev) => prev.map((t) => (t._id === updated._id ? updated : t)));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update todo");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete todo");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onCreate={handleCreate} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default App;
```

---

### Frontend — `src/components/TodoForm.tsx`

```typescript
import { useState } from "react";
import { CreateTodoPayload } from "../types/todo";

interface Props {
  onCreate: (payload: CreateTodoPayload) => void;
}

const TodoForm = ({ onCreate }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onCreate({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
```

---

### Frontend — `src/components/TodoList.tsx`

```typescript
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: Props) => {
  if (todos.length === 0) return <p>No todos yet. Create one above.</p>;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
```

---

### Frontend — `src/components/TodoItem.tsx`

```typescript
import { Todo } from "../types/todo";

interface Props {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        [{todo.priority.toUpperCase()}] {todo.title}
      </span>
      <button onClick={() => onToggle(todo)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => onDelete(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
```

---

### Goal

- Understand how a React frontend communicates with an Express backend
- Learn to isolate all API calls in a service layer
- Practice managing async state with loading and error handling
- Complete the MERN loop — MongoDB, Express, React, Node all working together
