import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./db";

const PORT = process.env.PORT || 8080;

const start = async (): Promise<void> => {
	await connectDB();
	app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}`);
	});
};

start();
