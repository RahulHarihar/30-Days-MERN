import express from "express";
import userRoutes from "./routes/userRoutes";
import { errorMiddleware } from "./errorMIddleware";
const app = express();

app.use(express.json());

app.use("/users", userRoutes);

app.use(errorMiddleware);

export default app;
