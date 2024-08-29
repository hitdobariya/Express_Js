const express = require('express');

const productRoutes = express.Router();

const {
    addProduct,
    // replaceProduct,
    updateProduct,
    deleteProduct,
    getProduct ,
    getSingleProduct
} = require('../controller/product.controller');

productRoutes.post('/addproduct', addProduct);

// productRoutes.put('/:id', replaceProduct);

productRoutes.patch('/updateproduct', updateProduct);

productRoutes.delete('/deleteproduct', deleteProduct);

productRoutes.get('/getproduct', getProduct);

productRoutes.get('/get-product', getSingleProduct);

module.exports = productRoutes;