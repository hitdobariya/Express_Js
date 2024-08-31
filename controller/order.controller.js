const Order = require("../model/order.model");
const Cart = require("../model/cart.model");

exports.createOrder = async (req, res) => {
    try {
        let cart = await Cart.find({ user: req.user._id, isDelete: false }).populate("productId");
        console.log(cart);
        let orderItem = cart.map((item) => ({
            productId: item.productId._id,
            quantity: item.quantity,
            price: item.productId.price,
            totalAmount: item.quantity * item.productId.price
        }));
        // console.log(orderItem);
        let amount = orderItem.reduce((total, item) => (total += item.totalAmount), 0);
        console.log(amount);
        
        let order = await Order.create({
            userId: req.user._id,
            items: orderItem,
            totalPrice: amount
        });
        await Cart.updateMany({ user: req.user._id, isDelete: false }, { isDelete: true });
        res.json({ message: 'order placed...', order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

