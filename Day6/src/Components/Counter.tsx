import { useState } from "react";
import "../App.css";

function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div className='card'>
			{/* BUTTON ROW */}
			<div className='buttons'>
				<button onClick={() => setCount(prev => prev + 1)}>Increment +</button>
				<button onClick={() => setCount(prev => prev - 1)}>Decrement -</button>
				<button onClick={() => setCount(0)}>Reset</button>
			</div>

			{/* COUNT ROW */}
			<p className='count'>Current count is {count}</p>
		</div>
	);
}

export default Counter;
