const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.post('/add-product', (req, res) => {
    const newProduct = new Product(req.body.name, req.body.description, req.body.price, req.body.quantity);
    Product.addProduct(newProduct);
    res.status(201).send('Product added');
});

module.exports = router;
