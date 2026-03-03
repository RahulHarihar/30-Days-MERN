import express, { Request, Response } from "express";
import todoRoutes from "./routes/todoRoute";

const app = express();

app.use(express.json());
app.use("/todos", todoRoutes);

//Health check
app.get("/health", (req: Request, res: Response) => {
	res.status(200).json({ status: "ok" });
});

export default app;
