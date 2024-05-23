const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', (req, res) => {
    res.json(Product.getAllProducts());
});

module.exports = router;
