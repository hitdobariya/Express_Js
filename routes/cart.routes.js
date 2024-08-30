const express = require("express");
const cartRoutes = express.Router();
const { 
    addToCart,
    getAllCarts,
    deleteCart,
    updateCart
} = require('../controller/cart.controller');
const { verifyToken } = require("../helper/tokenVerify");

cartRoutes.post('/addtocart', verifyToken, addToCart);
cartRoutes.get('/getcarts', verifyToken, getAllCarts);
cartRoutes.delete('/deletecart', verifyToken, deleteCart);
cartRoutes.patch('/update',verifyToken, updateCart);

module.exports = cartRoutes;