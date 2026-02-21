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
	import { ThemeProvider } from "./Day13/context/ThemeContext";
	import ThemeToggle from "./Day13/components/ThemeToggle";

	const App = () => {
		return (
			<ThemeProvider>
				<div className='min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center transition-colors duration-300'>
					<h1 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
						Welcome to the Theme Toggle App
					</h1>
					<ThemeToggle />
				</div>
			</ThemeProvider>
		);
	};

	export default App;
