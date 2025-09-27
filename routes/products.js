const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Obtenir tous les produits
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ajouter un produit
router.post('/', async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
