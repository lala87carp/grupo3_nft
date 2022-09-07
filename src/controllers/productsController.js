const path = require('path');
const fs = require('fs');
const db = require('../database/models');
const { validationResult } = require('express-validator');



const controller = {
    detail: (req, res) => {
        res.render("productDetail")
    },
    createForm: (req, res) => {
        res.render("productCreateForm", {products, session: req.session ? req.session : "" })
    },
    updateForm: async (req, res) => {
        const { id } = req.params;
        const product = await db.Product.findOne({ where: { id } });

        res.render("edit", { productEdit: product})
    },

    create: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.render('productCreateForm', { errors: errors.array() });
            }
            const { name, price, autor, category_id } = req.body;
            if (!name || !price || !autor || !category_id) {
                return res.render('productCreateForm', {
                    errors: {
                        msg: `Faltan los campos requeridos: ${['name', 'price', 'autor', 'category_id']
                                .filter(field => !req.body[field])
                                .join(', ')
                            }`
                    }
                })
            }
            const newProduct = { ...req.body, category_id: Number(category_id) }

            if (req.file?.filename) {
                newProduct.image = req.file.filename

            }
            const product = await db.Product.create(newProduct);

            res.redirect(`/product/detail/${product.id},`)


        } catch (error) {
            res.render('productCreateForm', {
                errors: [{
                    msg: "Ocurrio un error. Comunicate con el administrador."
                }]

            })
        }

    },
    find: async (req, res) => {
        const products = await db.Product.findAll()

        res.render('admin', { products });
    },
    findOne: async (req, res) => {
        const { id } = req.params;
        const product = await db.Product.findOne({ where: { id } });

        if (!product) return res.redirect('/not-found');

        return res.render('productDetail', { product,  session: req.session ? req.session : ""});
    },

    update: async (req, res) => {
        const { id } = req.params;
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const { id } = req.params;
                const product = await db.Product.findOne({ where: { id } });

                return res.render('edit', { errors: errors.array(), productEdit: product});
            }

            const paramsToUpdate = { ...req.body };

            paramsToUpdate.image = req.files?.filename || undefined

            const updatedProduct = await db.Product.update(
                paramsToUpdate,
                { where: { id } }
            );

            console.log({ updatedProduct });
            res.redirect(`/product/detail/${id}`)

        } catch (error) {
            res.render('edit', {
                errors: [{
                    msg: "Ocurrio un error. Comunicate con el administrador."
                    ,session: req.session ? req.session : ""
                }]

            })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        const product = await db.Product.findOne({ where: { id } });
        res.render('confirmProductDelete', {
            product, session: req.session ? req.session : ""
        })
    },

    destroy: function (req, res) {
        const productId = req.params.id;
        db.Product
            .destroy({ where: { id: productId }, force: true })
            .then(() => {
                return res.redirect('/admin')
            })
            .catch(error => res.send(error))
    }

}

module.exports = controller; 