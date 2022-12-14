const path = require('path');
const { Op } = require("sequelize");
const moment = require('moment');
const db = require('../../database/models');
const { name } = require('ejs');

const sequelize = db.sequelize;
const Product = db.Product;
const Category = db.Category;

const ProductsAPIController = {
  'list': async (req, res) => {
    //Asi es como cuentan todos los productos que hay en una categoría: SELECT `Category`.`id`, `Category`.`name`, COUNT(`products`.`id`) AS `products_count` FROM `category` AS `Category` LEFT OUTER JOIN `products` AS `products` ON `Category`.`id` = `products`.`category_id` GROUP BY `category`.`id`
    const categories = await Category.findAll({
      include: [{association:'products', attributes:[]}],
      attributes: [
        'name',
        [sequelize.fn('COUNT', sequelize.col('products.id')), 'products_count'],
      ],
     group: 'category.id'
    });

    let countByCategory = categories.reduce((counts, currentCategory) => {
      return {
        ...counts,
        [currentCategory.name]: currentCategory.dataValues.products_count
      }
    }, {});

    const count = await Product.count();
    const products = await Product.findAll({include:['category']})

    let respuesta = {
      count,
      countByCategory,
      products: products.map(product => ({
        ...product.dataValues,
        detail: '/api/products/' + product.id,
        
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