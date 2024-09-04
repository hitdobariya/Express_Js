const Product = require('../model/product.model');
const productservices = require('../services/product.service');
const productservice = new productservices();

exports.addProduct = async (req, res) => {
    try {
        let product = await productservice.getproduct();
        if (product) res.status(500).json({ message: 'product already exists...' });
        product = await productservice.addproduct();
        product.save();
        res.status(201).json({ message: 'product add successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getProduct = async (req, res) => {
    try {
        let product = await productservice.getallproduct();
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.getSingleProduct = async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.body.id }, { isDelete: false });
        if (!product) return res.status(404).json({ message: 'product not found...' });
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        let product = await productservice.getproduct();
        if (!product) return res.status(404).json({ message: 'product not found...' });
        product = await Product.updateOne({ _id: req.body.id }, { $set: req.body }, { new: true });
        res.status(200).json({ product, message: 'product update successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};

// --- hard delete
// exports.deleteProduct = async (req, res) => {
//     try {
//         let product = await Product.findById(req.query.id);
//         if (!product) return res.status(404).json({ message: 'product not found...' });
//         // product = await Product.deleteOne({ _id: req.query.id });
//         // product = await Product.findByIdAndDelete(product._id);
//         // res.status(200).json({message: 'user deleted successfully...'});
//         res.status(200).json({ message: 'product delete success...' });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: 'internal server error...' });
//     }
// };

// --- soft delete
exports.deleteProduct = async (req, res) => {
    try {
        let product = await productservice.getproduct();
        if (!product) return res.status(404).json({ message: 'product not found...' });
        product = await Product.updateOne({ _id: req.body.id }, { $set: { isDelete: true } }, { new: true });
        res.status(200).json({ message: 'product delete successfully...' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error...' });
    }
};