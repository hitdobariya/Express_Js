const Product = require('../model/product.model');

exports.addProduct = async (req, res) => {
    try {
        const { productName, title, price, description, manufacture_By } = req.body;
        let product = await Product.findbyId(req.body.id);
        if (product) res.status(500).json({ message: 'product already exists...' });
        product = await Product.create({ productName, title, price, description, manufacture_By });
        product.save();
        res.status(201).json({ message: 'product add successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getproduct = async (req, res) => {
    try {
        let product = await Product.find();
        res.status(200).json(product);
    } catch {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getSingleProduct = async (req, res) => {
    try {
        let product = await Product.findbyId(req.query.id);
        if(!product) return res.status(404).json({ message : 'product not found...'});
        res.status(200).json(product);
    } catch {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};