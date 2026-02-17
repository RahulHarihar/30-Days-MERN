import { useState } from "react";

type TodoInputProps = {
	addTodo: (text: string) => void;
};

const TodoInput = ({ addTodo }: TodoInputProps) => {
	const [text, setText] = useState("");

	const handleAdd = () => {
		if (!text.trim()) return;
		addTodo(text);
		setText("");
	};

	return (
		<div>
			<input
				type='text'
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder='Enter todo'
			/>
			<button onClick={handleAdd}>Add</button>
		</div>
	);
};

export default TodoInput;
