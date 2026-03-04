import { useState } from "react";
import type { CreateTodoPayload } from "../types/todo";

interface Props {
	onCreate: (payload: CreateTodoPayload) => void;
}

const TodoForm = ({ onCreate }: Props) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = () => {
		if (!title.trim()) return;
		onCreate({ title, description });
		setTitle("");
		setDescription("");
	};

	return (
		<div>
			<input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder='Title'
			/>
			<input
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder='Description'
			/>
			<button onClick={handleSubmit}>Add Todo</button>
		</div>
	);
};

export default TodoForm;
