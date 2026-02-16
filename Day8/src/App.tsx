// import DataList from "./Components/DataList";

// const App = () => {
// 	return (
// 		<div>
// 			<div
// 				style={{
// 					display: "inline-block",
// 					width: "100%",
// 					border: "1px solid white",
// 					padding: "10px",
// 					boxSizing: "border-box",
// 					margin: "20px auto",
// 					marginLeft: "60px",
// 				}}>
// 				<h1 style={{ textAlign: "center" }}>Day 8 - useEffect Hook</h1>
// 				<DataList />
// 			</div>
// 		</div>
// 	);
// };

// export default App;

// Day9 - Search Filter with useEffect

import { useState } from "react";
import SearchInput from "../Day9/src/Components/SearchInput";
import DataList from "../Day9/src/Components/DataList";
const App = () => {
	const [searchText, setSearchText] = useState("");
	return (
		<div>
			<h1>Day9 - Search Filter with useEffect</h1>

			<SearchInput searchText={searchText} setSearchText={setSearchText} />

			<DataList searchText={searchText} />
		</div>
	);
};

export default App;
