import { Router, Request, Response } from "express";
import { TodoModel } from "../models/Todo";

const router = Router();
// CREATE
router.post("/create", async (req: Request, res: Response) => {
	try {
		const { title, description, priority } = req.body;
		const newTodo = new TodoModel({ title, description, priority });
		const savedTodo = await newTodo.save();
		res.status(201).json(savedTodo);
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
});

// READ ALL
router.get("/", async (req: Request, res: Response) => {
	try {
		const todos = await TodoModel.find();
		res.status(200).json(todos);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
});

// READ ONE
router.get("/:id", async (req: Request, res: Response) => {
	try {
		const todo = await TodoModel.findById(req.params.id);
		if (!todo) {
			return res.status(404).json({ error: "Todo not found" });
		}
		res.status(200).json(todo);
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
});

// UPDATE
router.put("/:id", async (req: Request, res: Response) => {
	try {
		const updatedTodo = await TodoModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true, runValidators: true },
		);
		if (!updatedTodo) {
			return res.status(404).json({ error: "Todo not found" });
		}
		res.status(200).json(updatedTodo);
	} catch (error: any) {
		res.status(400).json({ error: error.message });
	}
});

// DELETE
router.delete("/:id", async (req: Request, res: Response) => {
	try {
		const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);
		if (!deletedTodo) {
			return res.status(404).json({ error: "Todo not found" });
		}
		res.status(200).json({ message: "Todo deleted successfully" });
	} catch (error: any) {
		res.status(500).json({ error: error.message });
	}
});

export default router;
