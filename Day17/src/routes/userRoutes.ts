import { Request, Response } from "express";
import { Router } from "express";
import { users, Users } from "../users";

const router = Router();

router.post("/create", (req: Request, res: Response) => {
	const { username, email, password } = req.body;

	if (!username || !email || !password) {
		return res.status(400).json({
			message: "All fields are required",
		});
	}

	if (password.length < 6) {
		return res.status(400).json({
			message: "Password must be atleast 6 characters long",
		});
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({ message: "Invalid email format" });
	}

	const existingUser = users.find((user: Users) => user.email === email);
	if (existingUser) {
		return res.status(400).json({ message: "Email already exists" });
	}

	const newUser: Users = {
		id: users.length + 1,
		name: username,
		email: email,
	};
	users.push(newUser);
	res.status(201).json({ message: "User created successfully", user: newUser });
});

router.get("/all", (req: Request, res: Response) => {
	res.json(users);
});

export default router;
