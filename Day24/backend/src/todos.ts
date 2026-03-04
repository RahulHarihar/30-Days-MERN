export interface Todo {
	id: number;
	title: string;
	description: string;
	completed: boolean;
}

export const todos: Todo[] = [
	{
		id: 1,
		title: "Buy groceries",
		description: "Milk, eggs, bread",
		completed: false,
	},
	{
		id: 2,
		title: "Read a book",
		description: "Finish the TypeScript handbook",
		completed: false,
	},
	{
		id: 3,
		title: "Go for a walk",
		description: "30 minutes in the park",
		completed: true,
	},
];

let nextId = 4;

export const incrementId = (): number => nextId++;
