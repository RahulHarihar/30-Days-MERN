import { Router, Request, Response } from "express";
import { todos, incrementId, Todo } from "../todos";

const router = Router();

//GET /todos/all
router.get("/", (req: Request, res: Response): void => {
	res.status(200).json(todos);
});

//GET /todos/:id
router.get("/:id", (req: Request, res: Response): void => {
	const id = parseInt(req.params.id || "0");
	if (isNaN(id)) {
		res.status(400).json({ error: "Invalid ID." });
	}
	const todo = todos.find((t) => t.id === id);

	if (!todo) {
		res.status(404).json({
			error: "Todo not found.",
		});
		return;
	}

	res.status(200).json(todo);
});

//POST /todos/create
router.post("/create", (req: Request, res: Response): void => {
	const { title, description } = req.body;

	if (!title || typeof title !== "string" || title.trim() === "") {
		res.status(400).json({ error: "Title is required" });
		return;
	}

	const newTodo: Todo = {
		id: incrementId(),
		title: title.trim(),
		description: description?.trim() || "",
		completed: false,
	};

	todos.push(newTodo);

	res.status(201).json({
		message: "Todo created successfully",
		todo: newTodo,
	});
});

//PUT /todos/:id
router.put("/:id", (req: Request, res: Response): void => {
	const id = parseInt(req.params.id || "0");
	if (isNaN(id)) {
		res.status(400).json({ error: "Invalid ID." });
	}

	const index = todos.findIndex((t) => t.id === id);

	if (index === -1) {
		res.status(404).json({ error: "Todo not found." });
		return;
	}

	const { title, description, completed } = req.body;

	if (
		title !== undefined &&
		(typeof title !== "string" || title.trim() === "")
	) {
		res.status(400).json({ error: "Title must not be empty. string. " });
		return;
	}

	if (completed !== undefined && typeof completed !== "boolean") {
		res.status(400).json({ error: "Completed must be a boolean." });
		return;
	}

	todos[index] = {
		...todos[index],
		...(title !== undefined && { title: title.trim() }),
		...(description !== undefined && { description: description.trim() }),
		...(completed !== undefined && { completed }),
	} as Todo;

	res.status(200).json({
		message: "Todo updated successfully",
		todo: todos[index],
	});
});

//DELETE /todos/:id
router.delete("/:id", (req: Request, res: Response): void => {
	const id = parseInt(req.params.id || "0");
	if (isNaN(id)) {
		res.status(400).json({ error: "Invalid ID." });
	}

	const index = todos.findIndex((t) => t.id === id);

	if (index === -1) {
		res.status(404).json({ error: "Todo not found." });
		return;
	}

	const deleted = todos.splice(index, 1)[0];

	res.status(200).json({
		message: "Todo deleted successfully.",
		todo: deleted,
	});
});

export default router;
