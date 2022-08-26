const express = require("express");
const path = require('path');
const multer = require('multer');
const router = express.Router();
const { body } = require('express-validator');

const cartController = require("../controllers/cartControllers");
const usersControllers = require("../controllers/usersControllers");
const loginControllers= require("../controllers/loginControllers");
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware')


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
router.get("/register", guestMiddleware, usersControllers.index);
router.get('profile', authMiddleware, loginControllers.profile);
router.get('/login', loginControllers.loginProcess)
router.get('/logout', loginControllers.logout)
router.post("/register", upload.single('image'), usersControllers.create);
router.post('/login', guestMiddleware, loginControllers.loginProcess);



module.exports = router; 