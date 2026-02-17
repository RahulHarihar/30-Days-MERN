import { Todo } from "../types/todo";

type TodoItemProps = {
	todo: Todo;
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
};

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
	return (
		<li>
			<span
				style={{
					textDecoration: todo.completed ? "line-through" : "none",
					cursor: "pointer",
				}}
				onClick={() => toggleTodo(todo.id)}>
				{todo.text}
			</span>
			<button onClick={() => deleteTodo(todo.id)}>❌</button>
		</li>
	);
};

export default TodoItem;
