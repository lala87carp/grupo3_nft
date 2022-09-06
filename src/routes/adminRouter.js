const express = require ("express");
const controller = require("../controllers/adminControllers");
const router = express.Router();


const adminController = require ("../controllers/adminControllers"); 


router.get("/", adminController.index);

// router.delete('delete/:id', adminController.destroy);

module.exports = router;