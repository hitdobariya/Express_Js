const Product = require('../model/product.model');

exports.addProduct = async (req, res) => {
    try {
        const product = await Product.create({ ...req.body });
        product.save();
        res.status(201).json({ message: 'product add successfully' });
    } catch (error) {
        console.log(error);
        res.status(500);
    }
};