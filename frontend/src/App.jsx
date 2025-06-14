import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";

function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">About</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<div></div>} />
				<Route path="/Login" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;
