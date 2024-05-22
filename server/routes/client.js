const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Purchase = require('../models/purchase');

router.get('/products', (req, res) => {
    res.json(Product.getAllProducts());
});

router.post('/purchase', (req, res) => {
    const purchaseDetails = req.body;
    const purchase = new Purchase(purchaseDetails.username, purchaseDetails.products);
    Purchase.addPurchase(purchase);
    res.status(200).send('Purchase successful');
});

module.exports = router;
