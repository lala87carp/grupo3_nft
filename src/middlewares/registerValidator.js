const {body} = require('express-validator')

const registerValidator = [
    body('name').notEmpty().withMessage('El campo de nombre tiene que estar completo'),
    body('surname').notEmpty().withMessage('El campo de apellido tiene que estar completo')

]

module.exports = registerValidator