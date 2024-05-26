const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/products', (req, res) => {
    res.json(Product.getAllProducts());
});


router.get('/product', (req, res) => {
  let productName=req.query.productName
  res.json( (Product.getAllProducts()).find( (product  )=> product.name==productName  ) );
});



module.exports = router;
