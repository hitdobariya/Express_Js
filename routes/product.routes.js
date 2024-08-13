
const express = require('express');

const productRoutes = express();

const {
    addProduct,
    replaceProduct,
    updateProduct,
    deleteProduct,
    getProduct ,
    getSingleProduct
} = require('../controller/product.controller');

productRoutes.post('/', addProduct);

productRoutes.put('/:id', replaceProduct);

productRoutes.patch('/:id', updateProduct);

productRoutes.delete('/:id', deleteProduct);

productRoutes.get('/', getProduct);

productRoutes.get('/:id', getSingleProduct);

module.exports = productRoutes;