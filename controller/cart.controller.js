const Cart = require("../model/cart.model");

exports.addToCart = async (req, res) => {
    try {
        let userId = req.user._id;
        let cart = await Cart.findOne({ user: userId, productId: req.body.productId, isDelete: false });
        if (cart) {
            return await Cart.findByIdAndUpdate({ cartId: cart.cartId }, { $inc: { quantity: 1 } }, { new: true });
        }
        cart = await Cart.create({ user: userId, ...req.body });
        res.status(201).json({ message: 'cart added...', cart })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getAllCarts = async (req, res) => {
    let carts = await Cart.find({ user: req.user._id });
    res.json(carts);
};

exports.deleteCart = async (req, res) => {
    try {
        let cart = await Cart.updateOne({ _id: req.body.cartId }, { $set: { isDelete: true } }, { new: true });
        console.log(cart);
        if (!cart) return res.status(404).json({ message: 'cart not found...' });
        res.status(200).json({ message: 'cart deleted...', cart });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.updateCart = async (req, res) => {
    try {
        let cart = await Cart.updateOne({ _id: req.query.cartId }, { $inc: { quantity: +req.query.quantity } }, { new: true });
        console.log(cart);
        if (!cart) return res.status(404).json({ message: 'cart not found...' });
        res.status(200).json({ message: 'cart updated...', cart });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};