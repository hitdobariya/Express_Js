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

// exports.replaceProduct = async (req, res) => {
//     try {
//         let id = +req.params.id;
//         let productIndex = product.findIndex((product) => product.id === id);
//         // console.log(productIndex);
//         product.splice(productIndex, 1, { ...req.body });
//         res.json({ message: 'replace product successfully' });
//     } catch (error) {
//         console.log(error);
//         res.status(500);
//     }
// };

// exports.updateProduct = async (req, res) => {
//     try {
//         let id = +req.params.id;
//         productIndex = product.findIndex((product) => product.id === id);
//         const products = product[productIndex];
//         // console.log(products);
//         product.splice(productIndex, 1, { ...products, ...req.body });
//         res.json({ message: 'update product sucessfully' });
//     } catch (error) {
//         console.log(error);
//         res.status(500);
//     }
// };

// exports.deleteProduct = async (req, res) => {
//     try {
//         let id = +req.params.id;
//         productIndex = product.findIndex((product) => product.id === id);
//         product.splice(productIndex, 1);
//         res.json({ message: 'delete product successfully' });
//     } catch (error) {
//         console.log(error);
//         res.status(500);
//     }
// };

// exports.getProduct = async (req, res) => {
//     try {
//         res.json(product);
//     } catch (error) {
//         console.log(error);
//         res.status(500);
//     }
// };

// exports.getSingleProduct = async (req, res) => {
//     try {
//         let id = +req.params.id;
//         let item = product.find((product) => product.id === id);
//         res.json(item);
//     } catch (error) {
//         console.log(error);
//         res.status(500);
//     }
// };