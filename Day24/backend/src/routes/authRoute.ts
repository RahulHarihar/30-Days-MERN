import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const router = Router();

const sendResponse = (
	res: Response,
	status: number,
	data: unknown,
	success: boolean = true,
) => {
	return res
		.status(status)
		.json({ success, [success ? "data" : "error"]: data });
};

const getErrorMessage = (error: unknown): string => {
	if (error instanceof Error) return error.message;
	return String(error);
};

// POST /auth/signup
router.post("/signup", async (req: Request, res: Response): Promise<void> => {
	try {
		const { email, password } = req.body;

		const existing = await User.findOne({ email });
		if (existing) {
			sendResponse(res, 400, "Email already in use", false);
			return;
		}

		const hashed = await bcrypt.hash(password, 10);
		const user = new User({ email, password: hashed });
		await user.save();

		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: "7d" },
		);

		sendResponse(res, 201, { token, email: user.email });
	} catch (error) {
		sendResponse(res, 500, getErrorMessage(error), false);
	}
});

// POST /auth/login
router.post("/login", async (req: Request, res: Response): Promise<void> => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });
		if (!user) {
			sendResponse(res, 401, "Invalid email or password", false);
			return;
		}

		const match = await bcrypt.compare(password, user.password as string);
		if (!match) {
			sendResponse(res, 401, "Invalid email or password", false);
			return;
		}

		const token = jwt.sign(
			{ userId: user._id },
			process.env.JWT_SECRET as string,
			{ expiresIn: "7d" },
		);

		sendResponse(res, 200, { token, email: user.email });
	} catch (error) {
		sendResponse(res, 500, getErrorMessage(error), false);
	}
});

export default router;
