import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";

function App() {
	return (
		<Router>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/Profile">Profile</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/" element={<div></div>} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Profile" element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
