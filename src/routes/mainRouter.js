const express = require ("express");
const router = express.Router();

const mainController = require ("../controllers/mainController"); 
const userConteroller = require("../controllers/usersControllers"); 


router.get("/", mainController.index);
router.get('/login', userConteroller.login)
router.get('/register', userConteroller.index)

module.exports = router;