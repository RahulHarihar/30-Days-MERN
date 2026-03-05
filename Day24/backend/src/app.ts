import express, { Application, Request, Response } from "express";
import cors from "cors";
import authRoutes from "./routes/authRoute";
import todoRoutes from "./routes/todoRoute";
import authMiddleware from "./middleware/authMiddleware";

const app: Application = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/todos", authMiddleware, todoRoutes);

app.get("/health", (_req: Request, res: Response) => {
	res.status(200).json({ status: "ok" });
});

export default app;
