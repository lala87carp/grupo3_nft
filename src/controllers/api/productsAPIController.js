const path = require('path');
const { Op } = require("sequelize");
const moment = require('moment');
const db = require('../../database/models');

const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;

const ProductsAPIController = {
  'list': async (req, res) => {
    const categories = await Category.findAll({
      include: ['products'],
      attributes: [
        'category_name',
        [sequelize.fn('COUNT', sequelize.col('products.id')), 'products_count'],
      ],
      group: 'category_name'
    });

    let countByCategory = categories.reduce((counts, currentCategory) => {
      return {
        ...counts,
        [currentCategory.category_name]: currentCategory.dataValues.products_count
      }
    }, {});

    const count = await Product.count();
    const products = await Product.findAll({
      include: ['product_images']
    })

    let respuesta = {
      count,
      countByCategory,
      products: products.map(product => ({
        id: product.id,
        name: product.name,
        description: product.description,
        detail: '/api/products/' + product.id,
        images: product.product_images
      }))
    }
    res.json(respuesta);
  },

  'detail': async (req, res) => {
    const product = await Product.findByPk(req.params.id, {
      include: ['product_images', 'categories', 'invoice_detail', 'product_financing', 'products_cart']
    })

    res.json({
      ...product.dataValues,
      product_images: product.product_images.map(image => ({
        ...image.dataValues,
        url: '/img/' + image.name
      }))
    });
  },
}



module.exports = ProductsAPIController;