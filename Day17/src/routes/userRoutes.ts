import { Request, Response } from "express";
import { Router } from "express";
import { users, Users } from "../users";

const router = Router();
interface IParam {
	id: string;
}

router.get("/all", (req: Request, res: Response) => {
	res.json(users);
});

router.post("/create", (req: Request, res: Response, next) => {
	try {
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
		res
			.status(201)
			.json({ message: "User created successfully", user: newUser });
	} catch (error) {
		next(error);
	}
});

router.put("/update/:id", (req: Request<IParam>, res: Response, next) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({ message: "ID parameter is required" });
		}
		const { username, email } = req.body;

		const user = users.find((user: Users) => user.id === parseInt(id));
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		const existingUser = users.find(
			(user: Users) => user.email === email && user.id !== parseInt(id),
		);
		if (existingUser) {
			return res.status(400).json({ message: "Email already exists" });
		}

		const updatedUser = { ...user, name: username, email };
		const updatedUsers = users.map((u: Users) =>
			u.id === parseInt(id) ? updatedUser : u,
		);
		users.length = 0;
		users.push(...updatedUsers);

		res.json({ message: "User updated successfully", user: updatedUser });
	} catch (error) {
		next(error);
	}
});

router.delete("/delete/:id", (req: Request<IParam>, res: Response, next) => {
	try {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({ message: "ID parameter is required" });
		}
		const userIndex = users.findIndex(
			(user: Users) => user.id === parseInt(id),
		);
		if (userIndex === -1) {
			return res.status(404).json({ message: "User not found" });
		}
		users.splice(userIndex, 1);
		res.json({ message: "User deleted successfully" });
	} catch (error) {
		next(error);
	}
});

export default router;
