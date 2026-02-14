import { useState } from "react";
import Texttext from "./Components/TextInput";
import DisplayText from "./Components/DisplayText";

const App = () => {
	const [text, settext] = useState("");
	return (
		<div>
			<h1>Day7 - State Uplifting & Prop handling</h1>
			<Texttext text={text} setText={settext} />
			<DisplayText text={text} />
		</div>
	);
};

export default App;
