const path = require('path');
const { body } = require('express-validator');

const productValidator = [
  body('name').notEmpty().withMessage('Debes escribir el nombre del producto').bail().isLength({ min: 5 }).withMessage('El nombre no puede tener menos de 5 caracteres'),
  body('description').notEmpty().withMessage('Debes escribir una descripcion').bail().isLength({ min: 20 }).withMessage('La descripción no puede tener menos de 20 caracteres'),
  // body('image').custom((value, { req }) => {
  //   let file = req.file;
  //   let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];
  //   if (!file) {
  //     throw new Error('Tienes que subir una imagen');
  //       } else {
  //         let fileExtension = path.extname(file.originalname);
  //         if (!acceptedExtensions.includes(fileExtension)) {
  //           throw new Error('Las extensiones de archivo permitidas son jpg, png, gif y jpeg.');
  //         }
  //       }
  //       return true;
  //     })
]

module.exports = productValidator