const product = require('../product.json');

exports.addProduct = (req,res) => {
    product.push(req.body);
    res.json({message : 'product add successfully'});
};

exports.replaceProduct = (req, res) => {
    let id = +req.params.id;
    let productIndex  =  product.findIndex((product) => product.id === id);
    // console.log(productIndex);
    product.splice(productIndex , 1 , {...req.body});
    res.json({message : 'replace product successfully'});
};

exports.updateProduct = (req,res) => {
    let id = +req.params.id;
    productIndex = product.findIndex((product) => product.id === id);
    const products = product[productIndex];
    // console.log(products);
    product.splice(productIndex , 1 , {...products, ...req.body});
    res.json({message : 'update product sucessfully'});
};

exports.deleteProduct =  (req,res) => {
    let id = +req.params.id;
    productIndex = product.findIndex((product) => product.id === id);
    product.splice(productIndex , 1);
    res.json({message : 'delete product successfully'});
};

exports.getProduct = (req,res) => {
    res.json(product);
};

exports.getSingleProduct = (req,res) => {
    let id = +req.params.id;
    let item = product.find((product)=> product.id === id);
    res.json(item);
};