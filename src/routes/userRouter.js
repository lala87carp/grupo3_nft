const express = require("express");
const path = require('path');
const multer = require('multer');
const router = express.Router();
const { body } = require('express-validator');

const cartController = require("../controllers/cartControllers");
const usersController = require("../controllers/usersControllers");
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware')
const userLoggedMiddleware =require('../middlewares/userLoggedMiddleware')
const registerValidator = require('../middlewares/registerValidator')
const loginValidator = require('../middlewares/loginValidator')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../../public/images/usersImg'))
    },
    filename: function (req, file, cb) {
        cb(null, 'foto' + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage })


router.get("/productCart", cartController.cart);
router.get("/register", guestMiddleware, usersController.index);
router.get('/profile', authMiddleware, usersController.profile);
router.get('/login', usersController.login)
router.get('/logout', usersController.logout)
router.post("/register", upload.single('image'), registerValidator, usersController.create);
router.post('/login', loginValidator, usersController.loginProcess);


module.exports = router; 