let mysql = require("mysql2");
const db = require('../models/index');
const Customer = db.sequelize.models.Customer;
const Order = db.sequelize.models.Product;
var express = require('express');
var router = express.Router();

router.get('/listjson', async function (req, res) {
    let customers = await Customer.findAll({
        include: "orders"
    });
    res.json(customers);
});

module.exports = router;