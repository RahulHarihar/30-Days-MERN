import { useEffect, useState } from "react";
import type { Todo, CreateTodoPayload } from "./types/todo";
import {
	getAllTodos,
	createTodo,
	updateTodo,
	deleteTodo,
} from "./services/todoService";
import { login, signup, logout, getToken } from "./services/authService";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

type AuthView = "login" | "signup";

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [token, setToken] = useState<string | null>(getToken());
	const [authView, setAuthView] = useState<AuthView>("login");
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

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

	const handleLogin = async (email: string, password: string) => {
		try {
			const t = await login({ email, password });
			localStorage.setItem("token", t);
			setToken(t);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Login failed");
		}
	};

	const handleSignup = async (email: string, password: string) => {
		try {
			const t = await signup({ email, password });
			localStorage.setItem("token", t);
			setToken(t);
			setError(null);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Signup failed");
		}
	};

	const handleLogout = () => {
		logout();
		setToken(null);
		setTodos([]);
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
		if (token) fetchTodos();
	}, [token]);

	if (!token) {
		return authView === "login" ? (
			<LoginForm
				onLogin={handleLogin}
				onSwitch={() => setAuthView("signup")}
				error={error}
			/>
		) : (
			<SignupForm
				onSignup={handleSignup}
				onSwitch={() => setAuthView("login")}
				error={error}
			/>
		);
	}

	return (
		<div className='min-h-screen bg-gray-100 py-10 px-4'>
			<div className='max-w-2xl mx-auto'>
				<div className='flex justify-between items-center mb-8'>
					<h1 className='text-3xl font-bold text-gray-800'>My Todos</h1>
					<button
						onClick={handleLogout}
						className='text-sm text-red-500 hover:underline'>
						Logout
					</button>
				</div>
				{error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
				{loading ? (
					<p className='text-gray-500 text-center mt-8'>Loading...</p>
				) : (
					<>
						<TodoForm onCreate={handleCreate} />
						<TodoList
							todos={todos}
							onToggle={handleToggle}
							onDelete={handleDelete}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default App;
