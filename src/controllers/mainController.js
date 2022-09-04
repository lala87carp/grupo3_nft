const db = require('../database/models');

const controller = {
    index: async (req, res) => {
        const products = await db.Product.findAll({limit: 4});
        res.render("home", {products})
    }

}
module.exports = controller;
