import { useState } from "react";
import { useEffect } from "react";
import { getProfile } from "./utility/api/user.api";

const profileStyle = {
	maxWidth: "400px",
	margin: "40px auto",
	padding: "24px",
	borderRadius: "12px",
	boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
	background: "#fff",
	fontFamily: "Segoe UI, Arial, sans-serif",
};

const labelStyle = {
	fontWeight: "bold",
	color: "#555",
	marginRight: "8px",
};

const valueStyle = {
	color: "#222",
};

const rowStyle = {
	marginBottom: "16px",
};

export default function Profile() {
	const [user, setUser] = useState({});
	useEffect(() => {
		async function getData() {
			const key = localStorage.getItem("key");
			const id = localStorage.getItem("id");
			const res = await getProfile({ key, id });
			setUser(res);
		}
		getData();
	}, []);

	return (
		<>
			{user ? (
				<div style={profileStyle}>
					<h2 style={{ marginBottom: "24px", color: "#1976d2" }}>
						User Profile
					</h2>
					<div style={rowStyle}>
						<span style={labelStyle}>Username:</span>
						<span style={valueStyle}>{user.username}</span>
					</div>
					<div style={rowStyle}>
						<span style={labelStyle}>Full Name:</span>
						<span style={valueStyle}>{user.fullName}</span>
					</div>
					<div style={rowStyle}>
						<span style={labelStyle}>Age:</span>
						<span style={valueStyle}>{user.age}</span>
					</div>
					<div style={rowStyle}>
						<span style={labelStyle}>Key:</span>
						<span style={valueStyle}>{user.key}</span>
					</div>
				</div>
			) : (
				<div>No Data</div>
			)}
		</>
	);
}
