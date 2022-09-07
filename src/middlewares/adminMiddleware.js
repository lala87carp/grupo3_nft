

function adminMiddleware(req, res, next) {
	if( req.session.userLogged && req.session.userLogged.rol == 1) {
		next();
	} else {
		return res.redirect('/');
	}
	
}

module.exports = adminMiddleware;