const User = require ('../models/User')

const controller = {
    index: (req, res) => {
        res.render("login") 
    },

    loginProcess: (req, res) =>{
        let userToLogin = User 
    }

}

module.exports = controller;

