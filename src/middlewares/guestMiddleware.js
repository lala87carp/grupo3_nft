const User = require('../models/User');
const fs = require('fs');

function guestMiddleware(req, res, next) {
	if (req.session.userLogged) {
		return res.redirect('profile');
	}
	next();
}

module.exports = guestMiddleware;