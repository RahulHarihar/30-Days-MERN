# Day 17 – Building REST APIs with Express & TypeScript

## Create and Fetch Users (Backend Fundamentals)

---

## Problem Statement

Extend the basic Express server built on **Day 16** by implementing **REST APIs
for creating and fetching users**.

This day introduces **real backend responsibilities**:

- Designing REST endpoints
- Handling request bodies
- Returning structured responses
- Managing in-memory data (no database yet)

The focus is on **API thinking**, not persistence.

---

## How Day 17 Builds on Previous Progress

By the end of Day 16, you already had:

- A TypeScript-based Express server
- Proper app/server separation
- A `/health` route for server monitoring

Day 17 takes the **next natural step**: ➡️ moving from _“server is alive”_  
➡️ to _“server actually manages data”_

This mirrors how real backend systems evolve.

---

## Features Implemented

- Express server written in **TypeScript**
- RESTful APIs for users
- In-memory user storage
- JSON request & response handling
- Proper HTTP status codes

---

## APIs to Implement

# Day 17 – Building REST APIs with Express & TypeScript

## Create and Fetch Users (Backend Fundamentals)

---

## Problem Statement

Extend the basic Express server built on **Day 16** by implementing **REST APIs
for creating and fetching users**.

This day introduces **real backend responsibilities**:

- Designing REST endpoints
- Handling request bodies
- Returning structured responses
- Managing in-memory data (no database yet)

The focus is on **API thinking**, not persistence.

---

## How Day 17 Builds on Previous Progress

By the end of Day 16, you already had:

- A TypeScript-based Express server
- Proper app/server separation
- A `/health` route for server monitoring

Day 17 takes the **next natural step**: ➡️ moving from _“server is alive”_  
➡️ to _“server actually manages data”_

This mirrors how real backend systems evolve.

---

## Features Implemented

- Express server written in **TypeScript**
- RESTful APIs for users
- In-memory user storage
- JSON request & response handling
- Proper HTTP status codes

---

## APIs to Implement

### 1️⃣ Create user

**Route**

```
POST /users/create
```

**Request Body**

```
{
  "username": "demo",
  "email": "demog@example.com",
  "password": "1234567890"
}
```

**Response**

```
{
  "message": "User created successfully",
  "user": {
    "id": 4,
    "name": "demo",
    "email": "demog@example.com"
  }
}
```

---

### 2️⃣ Fetch all users

**Route**

```
GET /users/all
```

**Response**

```
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@example.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@example.com"
  },
  {
    "id": 3,
    "name": "Charlie",
    "email": "charlie@example.com"
  },
  {
    "id": 4,
    "name": "demo",
    "email": "demog@example.com"
  }
]
```

---

### Constraints

- No database (use in-memory array)
- No authentication
- No external libraries beyond Express
- Focus on clarity and correctness
- APIs must return JSON only

### Concepts Practiced

- REST API design
- HTTP methods (GET, POST)
- Request body parsing
- Response shaping
- Type-safe backend development
- Stateful server logic (temporary)

### Project Structure

```
Day17/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── users.ts
│   └── routes/
│       └── users.ts
│
├── package.json
├── tsconfig.json
```

### File Responsibilities

**app.ts**

- Initialize Express app
- Register middleware
- Mount routes

**server.ts**

- Start HTTP server
- Define listening port
- routes/users.ts

**routes/userRoutes.ts**

- Handle /users routes
- Create and fetch users

**users.ts**

- Maintain in-memory data

### How to Run Install dependencies

```
npm install
```

### Start server in development

```
npm run dev
```

### Testing the APIs

**Use:**

- Browser (for GET requests)

- Postman / Thunder Client / curl (for POST)

### Example POST

```
http://localhost:3000/users/create
```

### Goal

-Understand how real APIs are structured

-Learn to design backend contracts
