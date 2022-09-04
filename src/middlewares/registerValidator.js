const {body} = require('express-validator')
const path = require('path')

const registerValidator = [
    body('name').notEmpty().withMessage('El campo de nombre tiene que estar completo').bail().isLength({min: 2}).withMessage('El campo de nombre debe tener al menos 2 caracteres'),
    body('surname').notEmpty().withMessage('El campo de apellido tiene que estar completo').bail().isLength({min: 2}).withMessage('El campo de nombre debe tener al menos 2 caracteres'),
    body ('email').notEmpty().withMessage('El campo E-mail tiene que estar completo').bail().isEmail().withMessage('El E-mail no es un formato válido'),
    body('password').notEmpty().withMessage('La contraseña no puede estar vacia').bail().isLength({min: 8}).withMessage('La contraseña debe tener mínimo 8 caracteres'),
    body('image').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
    if (!file) {
      throw new Error('Tienes que subir una imagen');
        } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
          }
        }
        return true;
      })
]


module.exports = registerValidator




  
    
 