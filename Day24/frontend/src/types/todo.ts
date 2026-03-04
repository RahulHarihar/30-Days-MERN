export interface Todo {
	_id: string;
	title: string;
	description: string;
	completed: boolean;
	priority: "low" | "medium" | "high";
	createdAt: string;
	updatedAt: string;
}

export interface CreateTodoPayload {
	title: string;
	description?: string;
	priority?: "low" | "medium" | "high";
}
