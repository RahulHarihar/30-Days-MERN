import DataList from "./Components/DataList";

const App = () => {
	return (
		<div>
			<div
				style={{
					display: "inline-block",
					width: "100%",
					border: "1px solid white",
					padding: "10px",
					boxSizing: "border-box",
					margin: "20px auto",
					marginLeft: "60px",
				}}>
				<h1 style={{ textAlign: "center" }}>Day 8 - useEffect Hook</h1>
				<DataList />
			</div>
		</div>
	);
};

export default App;
