import type { Todo } from "../types/todo";

interface Props {
	todo: Todo;
	onToggle: (todo: Todo) => void;
	onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
	return (
		<div>
			<span>
				[{todo.priority.toUpperCase()}] {todo.title}
			</span>
			<button onClick={() => onToggle(todo)}>
				{todo.completed ? "Undo" : "Complete"}
			</button>
			<button onClick={() => onDelete(todo._id)}>Delete</button>
		</div>
	);
};

export default TodoItem;
