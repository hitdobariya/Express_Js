
const express = require('express');

const productRoutes = express();

const {
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct ,
    getSingleProduct
} = require('../controller/product.controller');

productRoutes.put('/:id', addProduct);

productRoutes.patch('/:id', updateProduct);

productRoutes.delete('/:id', deleteProduct);

productRoutes.get('/', getProduct);

productRoutes.get('/:id', getSingleProduct);

module.exports = productRoutes;