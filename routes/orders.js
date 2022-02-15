const db = require('../models/index');
const Customer = db.sequelize.models.Customer;
const Product = db.sequelize.models.Product;
const Order = db.sequelize.models.Order;
var express = require('express');
var router = express.Router();

router.get('/listjson', async function(req, res) {
    let orders = await Order.findAll();
    res.json(orders);
});

module.exports = router;
