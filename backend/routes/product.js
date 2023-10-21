// server/routes/product.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Product = require('../models/Product');

const router = express.Router();

router.post(
  '/',
  [
    auth,
    admin,
    [
      check('productName', 'Product name is required').notEmpty(),
      check('price', 'Price is required').isNumeric(),
      check('categoryId', 'Category ID is required').notEmpty(),
      // other validations...
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { productName, price, categoryId, tagsId, isActive, image, prepTime, facts } = req.body;

    try {
      const newProduct = new Product({
        productName,
        price,
        categoryId,
        tagsId,
        isActive,
        image,
        prepTime,
        facts,
      });

      const product = await newProduct.save();

      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
