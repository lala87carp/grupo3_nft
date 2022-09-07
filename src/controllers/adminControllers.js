const path = require('path');
const fs = require('fs');
const db = require('../database/models');


const controller = {
    index: async (req, res) => {
        const products = await db.Product.findAll()
        
        res.render('/admin');
    },
    // index: (req, res) => {
    //     let productDataBase = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../Data/productDataBase.json')));
    //     res.render(path.resolve(__dirname, '../Views/admin'), {productDataBase});
    // },
    
    // destroy: async (req, res) => {
    //     const { id } = req.params;
    //     try {
    //         await db.Product.destroy({ where: id });
    //         res.redirect('/admin');
    //     } catch (error) {
    //         if(error.name === /* TODO Verificar nombre del error */'SequielizeNotFoundException') {
    //             return res.render('admin', { errors: {
    //                 msg: 'El producto que intentas borrar no existe'
    //             }})
    //         }
    //     }
    // }
  

}


module.exports = controller;