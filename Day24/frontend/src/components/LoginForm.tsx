import { useState } from "react";

interface Props {
	onLogin: (email: string, password: string) => void;
	onSwitch: () => void;
	error: string | null;
}

const LoginForm = ({ onLogin, onSwitch, error }: Props) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<div className='bg-white p-8 rounded-xl shadow-md w-full max-w-md'>
				<h2 className='text-2xl font-bold text-gray-800 mb-6'>Login</h2>
				{error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
				<input
					className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='w-full border border-gray-300 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					onClick={() => onLogin(email, password)}
					className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold'>
					Login
				</button>
				<p className='text-sm text-center text-gray-500 mt-4'>
					No account?{" "}
					<span
						onClick={onSwitch}
						className='text-blue-600 cursor-pointer hover:underline'>
						Sign up
					</span>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
