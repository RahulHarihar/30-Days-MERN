import mongoose, { Document, Schema } from "mongoose";

export interface ITodo extends Document {
	title: string;
	description: string;
	completed: boolean;
}

const TodoSchema: Schema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		completed: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	},
);

export default TodoModel = mongoose.model("Todo", TodoSchema);
