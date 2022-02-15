let mysql = require("mysql2");
const db = require('../models/index');
const Product = db.sequelize.models.Product;
const Order = db.sequelize.models.Order;
var express = require('express');
var router = express.Router();

router.get('/listjson', async function (req, res) {
    let products = await Product.findAll({
        include: "orders"
    });
    res.json(products);
});

module.exports = router;