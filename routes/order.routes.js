const express = require("express");
const orderRoutes = express.Router();
const { createOrder , deleteOrder } = require('../controller/order.controller');
const { verifyToken } = require("../helper/tokenVerify");

orderRoutes.post("/addorder", verifyToken, createOrder);
orderRoutes.delete("/deleteorder", verifyToken, deleteOrder)

module.exports = orderRoutes;