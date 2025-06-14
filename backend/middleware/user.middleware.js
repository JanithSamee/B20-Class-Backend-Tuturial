const jwt = require("jsonwebtoken");

function authenticateUser(req, res, next) {
	const { key } = req.body;
	const auth = jwt.verify(key, "12345678");

	if (auth) {
		req.auth = auth;
		next();
	} else {
		res.json({ msg: "Authorization Failed" });
	}
}

module.exports = { authenticateUser };
