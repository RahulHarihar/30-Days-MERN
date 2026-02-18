import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav
			style={{
				padding: 10,
				backgroundColor: "#eee",
				display: "flex",
				gap: 10,
			}}>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/contact'>Contact</Link>
		</nav>
	);
};

export default NavBar;
