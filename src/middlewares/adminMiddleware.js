

function adminMiddleware(req, res, next) {
	if(req.session.userLogged || req.session.userLogged != 1) {
		return res.redirect('/');
	}
	next();
}

module.exports = adminMiddleware;