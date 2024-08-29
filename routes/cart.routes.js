const express = require("express");
const cartRoutes = express.Router();
const {addToCart, getAllCarts} = require('../controller/cart.controller');
const { verifyToken } = require("../helper/tokenVerify");

cartRoutes.post('/addtocart', verifyToken, addToCart );
cartRoutes.get('/getcarts', verifyToken,  getAllCarts );

module.exports = cartRoutes;