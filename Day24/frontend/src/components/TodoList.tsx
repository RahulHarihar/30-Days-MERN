import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface Props {
	todos: Todo[];
	onToggle: (todo: Todo) => void;
	onDelete: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: Props) => {
	if (todos.length === 0) {
		return (
			<p className='text-center text-gray-400 mt-10'>
				No todos yet. Create one above.
			</p>
		);
	}

	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem
					key={todo._id}
					todo={todo}
					onToggle={onToggle}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
};

export default TodoList;
