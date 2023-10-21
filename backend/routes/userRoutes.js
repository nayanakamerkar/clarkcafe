const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, mobileNumber, clarkId, password } = req.body;
    console.log("called register");
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      mobileNumber,
      clarkId,
      password: hashedPassword,
    });

    // Save user to database
    await newUser.save();

    // Generate token
    const token = jwt.sign({ password: newUser._id }, 'secret_key');

    res.json({ token, ...newUser._doc });
    console.log("done");
  } catch (err) {
    console.log(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
