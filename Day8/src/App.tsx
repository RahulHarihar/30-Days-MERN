// import DataList from "./Components/DataList";

// const App = () => {
// 	return (
// 		<div>
// 			<div
// 				style={{
// 					display: "inline-block",
// 					width: "100%",
// 					border: "1px solid white",
// 					padding: "10px",
// 					boxSizing: "border-box",
// 					margin: "20px auto",
// 					marginLeft: "60px",
// 				}}>
// 				<h1 style={{ textAlign: "center" }}>Day 8 - useEffect Hook</h1>
// 				<DataList />
// 			</div>
// 		</div>
// 	);
// };

// export default App;

// Day9 - Search Filter with useEffect

// import { useState } from "react";
// import SearchInput from "../Day9/src/Components/SearchInput";
// import DataList from "../Day9/src/Components/DataList";
// const App = () => {
// 	const [searchText, setSearchText] = useState("");
// 	return (
// 		<div>
// 			<h1>Day9 - Search Filter with useEffect</h1>

// 			<SearchInput searchText={searchText} setSearchText={setSearchText} />

// 			<DataList searchText={searchText} />
// 		</div>
// 	);
// };

// export default App;

// Day10 - Todo List with useEffect
import { useState } from "react";
import TodoInput from "../Day10/src/Components/TodoInput";
import TodoList from "../Day10/src/Components/TodoList";

export type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

const App = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: Date.now(),
			text,
			completed: false,
		};
		setTodos((prev) => [...prev, newTodo]);
	};

	const toggleTodo = (id: number) => {
		setTodos((prev) =>
			prev.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo,
			),
		);
	};

	const deleteTodo = (id: number) => {
		setTodos((prev) => prev.filter((todo) => todo.id !== id));
	};

	return (
		<div>
			<h1>Day 10 – Todo App</h1>
			<TodoInput addTodo={addTodo} />
			<TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</div>
	);
};

export default App;
