// import mongoose, { Document, Schema } from "mongoose";

import mongoose, { Document, Model, Schema } from "mongoose";

// export interface ITodo extends Document {
// 	title: string;
// 	description: string;
// 	completed: boolean;
// }

// const TodoSchema: Schema = new Schema(
// 	{
// 		title: { type: String, required: true },
// 		description: { type: String, required: true },
// 		completed: { type: Boolean, default: false },
// 	},
// 	{
// 		timestamps: true,
// 	},
// );

// export default mongoose.model<ITodo>("Todo", TodoSchema);

export interface ITodo extends Document {
	title: string;
	description: string;
	completed: boolean;
	priority: "low" | "medium" | "high";
	createdAt: Date;
	updatedAt: Date;
	readonly summary: string;
}

const TodoSchema = new Schema<ITodo>(
	{
		title: {
			type: String,
			required: [true, "Title is required"],
			trim: true,
			minlength: [3, "Title must be at least 3 characters"],
			maxlength: [100, "Title cannot exceed 100 characters"],
		},
		description: {
			type: String,
			default: "",
			trim: true,
			maxlength: [500, "Description cannot exceed 500 characters"],
		},
		completed: {
			type: Boolean,
			default: false,
		},
		priority: {
			type: String,
			enum: {
				values: ["low", "medium", "high"],
				message: "Priority must be low, medium, or high",
			},
			default: "medium",
		},
	},
	{
		timestamps: true,
	},
);

TodoSchema.virtual("summary").get(function (this: ITodo) {
	return `[${this.priority.toUpperCase()}] ${this.title}`;
});

export const TodoModel: Model<ITodo> = mongoose.model<ITodo>(
	"Todo",
	TodoSchema,
);
