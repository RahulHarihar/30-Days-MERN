// Day 12
// import Card from "../src/Day12/components/Card";
// import { cardsData } from "../src/Day12/data/data";

// const App = () => {
// 	return (
// 		<div className='container'>
// 			{cardsData.map((item) => (
// 				<Card
// 					key={item.title}
// 					title={item.title}
// 					description={item.description}
// 				/>
// 			))}
// 		</div>
// 	);
// };

// export default App;

// Day 13
// 	import { ThemeProvider } from "./Day13/context/ThemeContext";
// 	import ThemeToggle from "./Day13/components/ThemeToggle";

// 	const App = () => {
// 		return (
// 			<ThemeProvider>
// 				<div className='min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center transition-colors duration-300'>
// 					<h1 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
// 						Welcome to the Theme Toggle App
// 					</h1>
// 					<ThemeToggle />
// 				</div>
// 			</ThemeProvider>
// 		);
// 	};

// 	export default App;

// Day 14
import "./App.css";
import Form from "../src/Day14/components/Form";
import React, { useState } from "react";

type FormValues = {
	username: string;
	email: string;
	password: string;
};

type InputFieldData = {
	id: number;
	type: string;
	name: keyof FormValues;
	placeholder: string;
	label: string;
	error: string;
	pattern?: string;
	required: boolean;
};

const inputFieldData: InputFieldData[] = [
	{
		id: 1,
		type: "text",
		name: "username",
		placeholder: "Username",
		label: "Username",
		error:
			"Username must be at least 3 characters long and can contain letters, numbers, and underscores.",
		pattern: "^[a-zA-Z0-9_]{3,}$",
		required: true,
	},
	{
		id: 2,
		type: "email",
		name: "email",
		placeholder: "Email",
		label: "Email",
		error: "Please enter a valid email address.",
		pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
		required: true,
	},
	{
		id: 3,
		type: "password",
		name: "password",
		placeholder: "Password",
		label: "Password",
		error:
			"Password must be at least 8 characters long, and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
		pattern: "^(?=.*[A-Z])(?=.*[a-z])(?=.*[\\d\\W])[A-Za-z\\d\\W]{8,}$",
		required: true,
	},
];

function App() {
	const [values, setValues] = useState<FormValues>({
		username: "",
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log("Form submitted:", values);
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4'>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-4'>
				{inputFieldData.map(({ id, name, ...props }) => {
					return (
						<Form
							key={id}
							name={name}
							value={values[name]}
							onChange={handleChange}
							{...props}
						/>
					);
				})}
				<button
					type='submit'
					className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium
	           hover:bg-blue-700 transition-colors duration-300'>
					Register Account
				</button>
			</form>
		</div>
	);
}

export default App;
