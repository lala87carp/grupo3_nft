const {body} = require('express-validator')
const path = require('path')

const loginValidator = [
    body('email').notEmpty().withMessage('El campo de usuario tiene que estar completo').bail().isEmail().withMessage('El email no es un formato valido'),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacia'),
]

module.exports = loginValidator