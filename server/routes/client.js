const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Purchase = require('../models/purchase');

router.get('/products', (req, res) => {
    res.json(Product.getAllProducts());
});


router.get('/product', (req, res) => {
  let productName=req.query.productName
  res.json( (Product.getAllProducts()).find( (product  )=> product.name==productName  ) );
});


router.get('/purchases', (req, res) => {
  res.json(Purchase.getUserPurchases(req.query.username));
});

router.post('/purchase', (req, res) => {
  console.log('Request body:', req.body);  // Añadir log para ver los datos recibidos
  const newPurchase = new Purchase(req.body.username, req.body.products)
  Purchase.addPurchase(newPurchase);
  console.log('Purchase added:', newPurchase);  // Añadir log para confirmar la adición del producto
  
  const products = req.body.products;

  res.status(201).json({ success: true });
});

module.exports = router;
