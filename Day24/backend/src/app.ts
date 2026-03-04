import express, { Application, Request, Response } from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoute";

const app: Application = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/health", (_req: Request, res: Response) => {
	res.status(200).json({ status: "ok" });
});

export default app;
