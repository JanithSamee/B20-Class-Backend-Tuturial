import axios from "axios";
const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL;

const baseUrl = axios.create({ baseURL: VITE_SERVER_URL });

async function createUser(data) {
	try {
		const res = await baseUrl.post("/user", data);
		return res.data;
	} catch (error) {
		console.log(error);
		return "Error Occured";
	}
}
async function LoginUser(data) {
	try {
		const res = await baseUrl.post("/login", data);
		return res.data;
	} catch (error) {
		console.log(error);
		return "Error Occured";
	}
}

async function getProfile(data) {
	try {
		const res = await baseUrl.post("/profile", data);
		return res.data;
	} catch (error) {
		console.log(error);
		return "Error Occured";
	}
}

export { createUser, LoginUser, getProfile };
