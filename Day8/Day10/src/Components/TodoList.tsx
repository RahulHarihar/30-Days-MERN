import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";


type TodoListProps = {
	todos: Todo[];
	toggleTodo: (id: number) => void;
	deleteTodo: (id: number) => void;
};

const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</ul>
	);
};

export default TodoList;
