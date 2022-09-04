const express = require("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');
const controller = require("../controllers/productsController");
const userLoggedMiddleware =require('../middlewares/userLoggedMiddleware')

const validateCreateForm =[
    body('name').isLength({min:2}).withMessage('complete el nombre del producto '),
    body('price').isLength({min:2}).withMessage('complete el precio'),
    body('description').isLength({min:2}).withMessage('complete la descripción')
   
]

// donde voy a guardar imagenes de los productos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/productImg'))
    },
    filename: function (req, file, cb) {
        cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({ storage })


router.get('/', controller.find);
router.get('/detail/:id', controller.findOne);
router.get('/create', controller.createForm);
router.post('/create', upload.single('image'),controller.create);
router.get('/update/:id', controller.updateForm);
router.put('/update/:id',  upload.single('image'), controller.update);
router.get('/delete/:id', controller.delete);
router.delete("/delete/:id", controller.destroy); 

// router.post('/productCreateForm', controller.create)
/* router.get("/productDetail", productController.detail);
router.get("/productCreateForm", productCreateController.index);
router.post("/productCreateForm", upload.single('image'), productCreateController.create);
router.get("/edit/:id", productCreateController.edit);
router.put("/edit/:id",upload.single('image'), productCreateController.put);*/



module.exports = router;


