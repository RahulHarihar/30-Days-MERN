import { useEffect, useState } from "react";
import type { Todo, CreateTodoPayload } from "./types/todo";
import {
	getAllTodos,
	createTodo,
	updateTodo,
	deleteTodo,
} from "./services/todoService";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchTodos = async () => {
		setLoading(true);
		try {
			const data = await getAllTodos();
			setTodos(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to fetch todos");
		} finally {
			setLoading(false);
		}
	};

	const handleCreate = async (payload: CreateTodoPayload) => {
		try {
			const newTodo = await createTodo(payload);
			setTodos((prev) => [newTodo, ...prev]);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to create todo");
		}
	};

	const handleToggle = async (todo: Todo) => {
		try {
			const updated = await updateTodo(todo._id, {
				completed: !todo.completed,
			});
			setTodos((prev) =>
				prev.map((t) => (t._id === updated._id ? updated : t)),
			);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to update todo");
		}
	};

	const handleDelete = async (id: string) => {
		try {
			await deleteTodo(id);
			setTodos((prev) => prev.filter((t) => t._id !== id));
		} catch (err) {
			setError(err instanceof Error ? err.message : "Failed to delete todo");
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div>
			<h1>Todo App</h1>
			<TodoForm onCreate={handleCreate} />
			<TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
		</div>
	);
};

export default App;
