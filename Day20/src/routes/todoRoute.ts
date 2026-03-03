import { Router, Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { TodoModel } from "../models/Todo";

const router = Router();

/**
 * Standardized response helper to ensure consistent API shape
 */
const sendResponse = (
	res: Response,
	status: number,
	data: unknown,
	success: boolean = true,
) => {
	return res.status(status).json({
		success,
		[success ? "data" : "error"]: data,
	});
};

/**
 * Error narrowing utility
 */
const getErrorMessage = (error: unknown): string => {
	if (error instanceof Error) return error.message;
	return String(error);
};

// CREATE
router.post("/create", async (req: Request, res: Response): Promise<void> => {
	try {
		const { title, description, priority } = req.body;
		const newTodo = new TodoModel({ title, description, priority });
		const savedTodo = await newTodo.save();
		sendResponse(res, 201, savedTodo);
	} catch (error: unknown) {
		sendResponse(res, 400, getErrorMessage(error), false);
	}
});

// READ ALL
router.get("/", async (req: Request, res: Response): Promise<void> => {
	try {
		const todos = await TodoModel.find();
		sendResponse(res, 200, todos);
	} catch (error: unknown) {
		sendResponse(res, 500, getErrorMessage(error), false);
	}
});

// READ ONE
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		if (!isValidObjectId(id)) {
			sendResponse(res, 400, "Invalid ID format", false);
			return;
		}
		const todo = await TodoModel.findById(id);
		if (!todo) {
			sendResponse(res, 404, "Todo not found", false);
			return;
		}
		sendResponse(res, 200, todo);
	} catch (error: unknown) {
		sendResponse(res, 500, getErrorMessage(error), false);
	}
});

// UPDATE
router.put("/:id", async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		const { title, description, priority, completed } = req.body;
		if (!isValidObjectId(id)) {
			sendResponse(res, 400, "Invalid ID format", false);
			return;
		}
		const updatedTodo = await TodoModel.findByIdAndUpdate(
			id,
			{ title, description, priority, completed },
			{ new: true, runValidators: true },
		);
		if (!updatedTodo) {
			sendResponse(res, 404, "Todo not found", false);
			return;
		}
		sendResponse(res, 200, updatedTodo);
	} catch (error: unknown) {
		sendResponse(res, 400, getErrorMessage(error), false);
	}
});

// DELETE
router.delete("/:id", async (req: Request, res: Response): Promise<void> => {
	try {
		const { id } = req.params;
		if (!isValidObjectId(id)) {
			sendResponse(res, 400, "Invalid ID format", false);
			return;
		}
		const deletedTodo = await TodoModel.findByIdAndDelete(id);
		if (!deletedTodo) {
			sendResponse(res, 404, "Todo not found", false);
			return;
		}
		sendResponse(res, 200, deletedTodo);
	} catch (error: unknown) {
		sendResponse(res, 500, getErrorMessage(error), false);
	}
});

export default router;
