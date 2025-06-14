import React, { useState } from "react";
import { LoginUser } from "./utility/api/user.api";

const styles = {
	container: {
		maxWidth: "350px",
		margin: "100px auto",
		padding: "32px",
		borderRadius: "8px",
		boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
		background: "#fff",
		fontFamily: "sans-serif",
	},
	title: {
		marginBottom: "24px",
		fontSize: "1.5rem",
		fontWeight: "bold",
		textAlign: "center",
		color: "#333",
	},
	label: {
		display: "block",
		marginBottom: "8px",
		fontWeight: "500",
		color: "#444",
	},
	input: {
		width: "100%",
		padding: "10px",
		marginBottom: "18px",
		border: "1px solid #ccc",
		borderRadius: "4px",
		fontSize: "1rem",
		outline: "none",
		boxSizing: "border-box",
	},
	button: {
		width: "100%",
		padding: "10px",
		background: "#1976d2",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		fontSize: "1rem",
		fontWeight: "bold",
		cursor: "pointer",
		transition: "background 0.2s",
	},
	buttonHover: {
		background: "#1565c0",
	},
};

function Login() {
	const [form, setForm] = useState({ username: "", password: "" });
	const [hover, setHover] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await LoginUser(form);

		console.log(res);
	};

	return (
		<div style={styles.container}>
			<div style={styles.title}>Login</div>
			<form onSubmit={handleSubmit}>
				<label style={styles.label} htmlFor="username">
					Username
				</label>
				<input
					style={styles.input}
					type="text"
					id="username"
					name="username"
					value={form.username}
					onChange={handleChange}
					required
				/>
				<label style={styles.label} htmlFor="password">
					Password
				</label>
				<input
					style={styles.input}
					type="password"
					id="password"
					name="password"
					value={form.password}
					onChange={handleChange}
					required
				/>
				<button
					type="submit"
					style={
						hover
							? { ...styles.button, ...styles.buttonHover }
							: styles.button
					}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}>
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
