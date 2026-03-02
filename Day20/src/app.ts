import express, { Application, Request, Response } from "express";
import todoRoutes from "./routes/todoRoute";
import { TodoModel } from "./models/Todo";

const app: Application = express();

app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    const newTodo = new TodoModel(req.body);
    const savedTodo = await newTodo.save();
    
    // We send back the saved document
    // If you set toJSON: { virtuals: true }, 'summary' will appear here!
    res.status(201).json(savedTodo);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

//Health check
app.get("/health", (req: Request, res: Response) => {
	res.status(200).json({ status: "ok" });
});

export default app;
