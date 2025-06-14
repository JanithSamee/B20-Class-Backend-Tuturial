const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
	title: {
		type: String,
	},
	username: {
		type: String,
		index: true,
		unique: true,
	},
	fullName: {
		type: String,
	},
	password: {
		type: String,
	},
	age: {
		type: Number,
	},
	key: {
		type: Number,
	},
});

const UserModel = new mongoose.model("User", UserSchema);

module.exports = UserModel;
