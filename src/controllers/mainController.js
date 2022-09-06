const db = require('../database/models');
const { Op } = require ("sequelize");

const controller = {
    index: async (req, res) => {
        const products = await db.Product.findAll({limit: 4});
        res.render("home", {products, session: req.session ? req.session : ""})
    },
    search: (req, res) => {
        let busqueda = req.query.searchAllProds.trim()
        db.Product.findAll({
            where: {
                [Op.or]:[
                {name: {[ Op.substring]: `%${busqueda}%`}},
                 ]
        }
    })
    .then (products => {
        res.render("productList" , { products,session: req.session ? req.session : "" })
    })

}

}
module.exports = controller;
