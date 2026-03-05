import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
	email: string;
	password: string;
}

const UserSchema: Schema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, "Password is required"],
			minlength: [6, "Password must be at least 6 characters long"],
		},
	},
	{
		timestamps: true,
	},
);

export const User = mongoose.model("User", UserSchema);
