const controller = {
    cart: (req, res) => {
        res.render("productCart", {session: req.session ? req.session : ""})
    }
}
module.exports = controller; 