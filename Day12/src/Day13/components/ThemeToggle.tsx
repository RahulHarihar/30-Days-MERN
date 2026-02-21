import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className='
				px-5 py-2 rounded-lg font-medium
				bg-gray-900 text-white
				hover:bg-gray-700
				dark:bg-gray-100 dark:text-gray-900
				dark:hover:bg-gray-300
				transition-colors duration-300
			'>
			Switch to {theme === "light" ? "Dark" : "Light"} Mode
		</button>
	);
};

export default ThemeToggle;
