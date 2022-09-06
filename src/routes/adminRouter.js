const express = require ("express");
const controller = require("../controllers/adminControllers");
const router = express.Router();


const adminController = require ("../controllers/adminControllers"); 
const adminMiddleware = require("../middlewares/adminMiddleware")

router.get("/", adminMiddleware, adminController.index);

// router.delete('delete/:id', adminController.destroy);

module.exports = router;