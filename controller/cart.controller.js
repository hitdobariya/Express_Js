const Cart = require("../model/cart.model");

exports.addToCart = async (req, res) => {
    try {
        let userId = req.user._id;
        let cart = await Cart.findOne({ user: userId, productId: req.body.productId, isDelete: false });
        if (cart) {
            return res.json({ message: 'alredy exist...' });
        }
        cart = await Cart.create({ user: userId, ...req.body });
        res.status(201).json({ message: 'cart added...', cart })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getAllCarts = async (req, res) => {
    let carts = await Cart.find({ user: req.user._id, isDelete: false });
    res.json(carts);
}