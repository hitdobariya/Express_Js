const express = require("express");
const orderRoutes = express.Router();
const { createOrder } = require('../controller/order.controller');
const { verifyToken } = require("../helper/tokenVerify");

orderRoutes.post("/addorder", verifyToken, createOrder)

module.exports = orderRoutes;