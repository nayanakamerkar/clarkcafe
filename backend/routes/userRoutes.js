const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, mobileNumber, id } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(id, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      mobileNumber,
      id: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    // Generate token
    const token = jwt.sign({ id: newUser._id }, 'secret_key');

    res.json({ token, ...newUser._doc });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
