require("dotenv").config();
require("./database/connect");
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");

const UserModel = require("./models/user.model");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

//Create Read Update Delete - CRUD

//Create
app.post("/user/", async (req, res) => {
	const user = req.body;

	const rawPW = user.password;

	const PWHash = await bcrypt.hash(rawPW, 10);

	const out = await UserModel.create({ ...user, password: PWHash });

	res.json(out);
});

app.post("/login", async (req, res) => {
	const { username, password } = req.body;

	const user = await UserModel.findOne({ username: username });

	if (!user) {
		return res.json({ msg: "User Not Found" });
	} else {
		const valid = await bcrypt.compare(password, user.password);

		if (valid) {
			const key = Math.round(Math.random() * 1000);
			user.key = key;
			await user.save();
			return res.json({ msg: "Login Success!", key, id: user._id });
		}

		return res.json({ msg: "User Authentication Failed" });
	}
});

//Read
app.post("/profile/", async (req, res) => {
	const { id, key } = req.body;
	const users = await UserModel.findOne({ _id: id, key });

	res.json(users);
});

//Read
app.get("/get-user/", async (req, res) => {
	const users = await UserModel.find({});

	res.json(users);
});

//Update
app.put("/edit-user/", async (req, res) => {
	const _id = req.body.id;
	const age = req.body.age;

	const user = await UserModel.findByIdAndUpdate(
		_id,
		{
			age,
		},
		{ new: true }
	);

	res.json(user);
});

//Delete
app.delete("/delete-user/", async (req, res) => {
	await UserModel.findByIdAndDelete("6828b46780c6e2de4cf676b8");

	res.json("Deleted");
});

app.listen(3000, () => {
	console.log("Server Running at PORT 3000");
});
