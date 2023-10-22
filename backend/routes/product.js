// server/routes/product.js
const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const admin = require('../middleware/adminAuth');
const Product = require('../models/Products');
const Category = require('../models/Categories'); // Import Category model
const Tag = require('../models/Tags'); // Import Tag model

const router = express.Router();

router.post(
  '/',
  [
    admin,
    [
      check('name', 'Product name is required').notEmpty(),
      check('price', 'Price is required').isNumeric(),
      check('categoryId', 'Category ID is required').notEmpty(),
      check('tagId', 'Tag ID is required').notEmpty(),

    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price, categoryId, tagId, isActive, prepTime, facts } = req.body;

    try {
      const newProduct = new Product({
        name,
        price,
        categoryId,
        tagId,
        isActive,
        prepTime,
        facts,
      });

      console.log("new product", newProduct);

      const product = await newProduct.save();

      res.json(product);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/categories-tags', async (req, res) => {
  try {
    const categories = await Category.find(); // Fetch all categories
    const tags = await Tag.find(); // Fetch all tags
    res.json({ categories, tags });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get("/get-products", async (req, res) => {
    const { tag, category } = req.query;
    try {
        const query = {};
        if (tag) {
            query.tagId = tag;
        }
        if (category) {
            query.categoryId = category;
        }
        // Find products based on the query
        const products = await Product.find(query);
        res.json(products);
        } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
})



module.exports = router;
