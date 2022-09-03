const path = require('path');
const fs = require('fs');
const db = require('../database/models');


const controller = {
    index: async (req, res) => {
        const products = await db.Product.findAll()
        
        res.render('./admin', { products });
    }
    // index: (req, res) => {
    //     let productDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../Data/productDataBase.json')));
    //     res.render(path.resolve(__dirname, '../Views/admin'), {productDataBase});
    // },
    }


module.exports = controller;