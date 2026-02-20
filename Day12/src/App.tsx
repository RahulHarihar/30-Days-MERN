import Card from "../src/Day12/components/Card";
import { cardsData } from "../src/Day12/data/data";

const App = () => {
	return (
		<div className='container'>
			{cardsData.map((item) => (
				<Card
					key={item.title}
					title={item.title}
					description={item.description}
				/>
			))}
		</div>
	);
};

export default App;
