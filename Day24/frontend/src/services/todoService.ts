import type { Todo, CreateTodoPayload } from "../types/todo";
import { getToken } from "./authService";

const BASE_URL = "http://localhost:3000/todos";

const authHeaders = () => ({
	"Content-Type": "application/json",
	Authorization: `Bearer ${getToken()}`,
});

export const getAllTodos = async (): Promise<Todo[]> => {
	const res = await fetch(BASE_URL, { headers: authHeaders() });
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
	return json.data;
};

export const createTodo = async (payload: CreateTodoPayload): Promise<Todo> => {
	const res = await fetch(`${BASE_URL}/create`, {
		method: "POST",
		headers: authHeaders(),
		body: JSON.stringify(payload),
	});
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
	return json.data;
};

export const updateTodo = async (
	id: string,
	updates: Partial<Todo>,
): Promise<Todo> => {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: "PUT",
		headers: authHeaders(),
		body: JSON.stringify(updates),
	});
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
	return json.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: "DELETE",
		headers: authHeaders(),
	});
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
};
