let mysql = require("mysql2");
const db = require('../models/index');
const Product = db.sequelize.models.Product;
const Order = db.sequelize.models.Order;
var express = require('express');
var router = express.Router();

router.get('/listjson', async function (req, res) {
    let customers = await Product.findAll({
        include: "orders"
    });
    res.json(customers);
});

module.exports = router;