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
		<div className='bg-white p-6 rounded-xl shadow-sm mb-6'>
			<h2 className='text-lg font-semibold text-gray-700 mb-4'>Add New Todo</h2>
			<input
				className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
				type='text'
				placeholder='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
				type='text'
				placeholder='Description (optional)'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button
				onClick={handleSubmit}
				className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold'>
				Add Todo
			</button>
		</div>
	);
};

export default TodoForm;
