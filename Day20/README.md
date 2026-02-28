# Day 20 – Building a Todo Application Backend with Express & TypeScript

## Full CRUD Todo API (Backend Fundamentals)

---

## Problem Statement

Build a **complete backend for a Todo application** using Express and
TypeScript.

This day introduces **full CRUD backend responsibilities**:

- Designing RESTful endpoints for a resource
- Handling request bodies and URL parameters
- Returning structured JSON responses
- Managing in-memory data (no database yet)

The focus is on **resource management thinking**, not persistence.

---

## How Day 20 Builds on Previous Progress

Day 20 takes the **next natural step**: ➡️ moving from _"managing users"_  
➡️ to _"managing a full resource lifecycle (Create, Read, Update, Delete)"_

This mirrors how real backend systems handle any data entity.

---

## Features Implemented

- Express server written in **TypeScript**
- RESTful APIs for todos
- In-memory todo storage
- JSON request & response handling
- Proper HTTP status codes
- Input validation

---

## APIs to Implement

---

### 1️⃣ Create a Todo

**Route**

```
POST /todos/create
```

**Request Body**

```json
{
	"title": "Buy groceries",
	"description": "Milk, eggs, bread"
}
```

**Response**

```json
{
	"message": "Todo created successfully",
	"todo": {
		"id": 1,
		"title": "Buy groceries",
		"description": "Milk, eggs, bread",
		"completed": false
	}
}
```

---

### 2️⃣ Fetch All Todos

**Route**

```
GET /todos/all
```

**Response**

```json
[
	{
		"id": 1,
		"title": "Buy groceries",
		"description": "Milk, eggs, bread",
		"completed": false
	},
	{
		"id": 2,
		"title": "Read a book",
		"description": "Finish the TypeScript handbook",
		"completed": false
	}
]
```

---

### 3️⃣ Fetch a Single Todo

**Route**

```
GET /todos/:id
```

**Response**

```json
{
	"id": 1,
	"title": "Buy groceries",
	"description": "Milk, eggs, bread",
	"completed": false
}
```

---

### 4️⃣ Update a Todo

**Route**

```
PUT /todos/:id
```

**Request Body**

```json
{
	"title": "Buy groceries",
	"description": "Milk, eggs, bread, butter",
	"completed": true
}
```

**Response**

```json
{
	"message": "Todo updated successfully",
	"todo": {
		"id": 1,
		"title": "Buy groceries",
		"description": "Milk, eggs, bread, butter",
		"completed": true
	}
}
```

---

### 5️⃣ Delete a Todo

**Route**

```
DELETE /todos/:id
```

**Response**

```json
{
	"message": "Todo deleted successfully",
	"todo": {
		"id": 1,
		"title": "Buy groceries",
		"description": "Milk, eggs, bread, butter",
		"completed": true
	}
}
```

---

### Constraints

- No database (use in-memory array)
- No authentication
- No external libraries beyond Express
- Focus on clarity and correctness
- APIs must return JSON only

---

### Concepts Practiced

- REST API design
- HTTP methods (GET, POST, PUT, DELETE)
- Request body and URL parameter parsing
- Response shaping
- Type-safe backend development
- Stateful server logic (temporary)
- Full CRUD operations

---

### Project Structure

```
Day20/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── todos.ts
│   └── routes/
│       └── todoRoutes.ts
│
├── package.json
├── tsconfig.json
```

---

### File Responsibilities

**app.ts**

- Initialize Express app
- Register middleware
- Mount routes

**server.ts**

- Start HTTP server
- Define listening port

**routes/todoRoutes.ts**

- Handle `/todos` routes
- Create, fetch, update, and delete todos

**todos.ts**

- Maintain in-memory todo data

---

### How to Run

Install dependencies

```
npm install
```

Start server in development

```
npm run dev
```

---

### Testing the APIs

**Use:**

- Browser (for GET requests)
- Postman / Thunder Client / curl (for POST, PUT, DELETE)

### Example POST

```
http://localhost:3000/todos/create
```

### Example PUT

```
http://localhost:3000/todos/1
```

### Example DELETE

```
http://localhost:3000/todos/1
```

---

### Goal

- Understand how a full CRUD API is structured
- Learn to manage a resource through its entire lifecycle
- Practice designing clean backend contracts with TypeScript
