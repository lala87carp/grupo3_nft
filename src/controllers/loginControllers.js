const User =require ('../models/User')
const bcrypt = require('bcryptjs');

const controller = {
    index: (req, res) => {
        res.render("login") 
    },

    loginProcess: (req, res) =>{
        let userToLogin = User .findByField('email', req.body.email)

        if (userToLogin) {
            const passwordOK = bcrypt.compareSync(req.body.password)

            if (passwordOK) {
                delete userToLogin.password
                req.session.userLogged = userToLogin;
                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                }
                return res.redirect('/user/profile')
            }
        }

        return res.render('userLoginForm', {
            errors: {email: {
                msg: 'No se encuentra en base de datos'}}
        })

        
    },

    profile: (req, res) => {
        return res.render
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');

    }

}

module.exports = controller;

