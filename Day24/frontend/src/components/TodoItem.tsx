import type { Todo } from "../types/todo";

interface Props {
	todo: Todo;
	onToggle: (todo: Todo) => void;
	onDelete: (id: string) => void;
}

const priorityColor = {
	low: "bg-green-100 text-green-700",
	medium: "bg-yellow-100 text-yellow-700",
	high: "bg-red-100 text-red-700",
};

const TodoItem = ({ todo, onToggle, onDelete }: Props) => {
	return (
		<li className='flex items-center justify-between bg-white px-5 py-4 rounded-xl shadow-sm mb-3'>
			<div className='flex items-center gap-3'>
				<input
					type='checkbox'
					checked={todo.completed}
					onChange={() => onToggle(todo)}
					className='w-4 h-4 accent-blue-600 cursor-pointer'
				/>
				<div>
					<p
						className={`font-medium text-gray-800 ${
							todo.completed ? "line-through text-gray-400" : ""
						}`}>
						{todo.title}
					</p>
					{todo.description && (
						<p className='text-sm text-gray-500'>{todo.description}</p>
					)}
				</div>
			</div>
			<div className='flex items-center gap-3'>
				<span
					className={`text-xs font-semibold px-2 py-1 rounded-full ${priorityColor[todo.priority]}`}>
					{todo.priority}
				</span>
				<button
					onClick={() => onDelete(todo._id)}
					className='text-sm text-red-400 hover:text-red-600 transition'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
