import type { AuthPayload } from "../types/todo";

const BASE_URL = "http://localhost:3000/auth";

export const signup = async (payload: AuthPayload): Promise<string> => {
	const res = await fetch(`${BASE_URL}/signup`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
	});
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
	return json.data.token;
};

export const login = async (payload: AuthPayload): Promise<string> => {
	const res = await fetch(`${BASE_URL}/login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
	});
	const json = await res.json();
	if (!json.success) throw new Error(json.error);
	return json.data.token;
};

export const logout = (): void => {
	localStorage.removeItem("token");
};

export const getToken = (): string | null => {
	return localStorage.getItem("token");
};
