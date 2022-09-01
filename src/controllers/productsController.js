const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { validationResult } = require('express-validator');



const controller = {
    detail: (req, res) => {
        res.render("productDetail")
    },
    createForm: (req, res) => {
        res.render("productCreateForm")
    },
    updateForm: (req, res) => {
        res.render("edit")
    },
     
    create: async (req, res) => { 
        const { name, price, autor, category_id } = req.body;
        if (!name || !price || !autor || !category_id ) {
            return res.render('productCreateForm', {
                errors: {
                    msg: `Faltan los campos requeridos: ${
                        ['name', 'price', 'autor', 'category_id']
                            .filter(field => !req.body[field])
                            .join(', ')
                    }`
                }
            })
        }
        const newProduct = { ...req.body, category_id: Number(category_id) }

        if(req.file?.filename) {
            newProduct.image = req.file.filename
            
        }
        const product = await db.Product.create(newProduct);

        res.redirect(`/product/detail/${product.id}`)
    },
    find: async (req, res) => {
        const products = await db.Product.findAll()
        
        res.render('./admin', { products });
    },
    findOne: async (req, res) => {
        const { id } = req.params;
        const product = await db.Product.findOne({ where: { id } });
        
        if(!product) return res.redirect('/not-found');

        return res.render('productDetail', { product });
    },
    update: async (req, res) => {
        const { id } = req.params;
        try {
            //tengo que hacer esta pagina productUpdateForm y agregar boton delete

            const paramsToUpdate = { ...req.body };

            if(req.files?.filename) {
                paramsToUpdate.image = req.files?.filename;
            }

            const updatedProduct = await db.Product.update(
                paramsToUpdate,
                { where: { id } }
            );
            /* if(!updatedProduct) {
                return res.render('productUpdateForm', { errors: ...})
            } */
            console.log({updatedProduct});
            res.redirect(`/productDetail/${updatedProduct.id}`)

        } catch (error) {
            console.log({errorName: error.name});
            /* if(error.name === '') {
                return res.render('productUpdateForm', { errors: ...})
            } */
            res.redirect('', {})
        }
    },
    delete: async (req, res) => {
        const { id } = req.params;
        try {
            await db.Product.destroy({ where: id });
            res.redirect('/');
        } catch (error) {
            if(error.name === /* TODO Verificar nombre del error */'SequielizeNotFoundException') {
                return res.render('edit', { errors: {
                    msg: 'El producto que intentas borrar no existe'
                }})
            }
        }
    }
    
}
module.exports = controller; 