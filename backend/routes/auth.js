// server/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const redisClient = require('../config/redis-client');
const User = require('../models/User');

const router = express.Router();

const EXPIRYTIMER = 360000;

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: EXPIRYTIMER,
    });
    redisClient.setex(token, EXPIRYTIMER, user.id);

    res.json({ token, userType: user.userType });
  } catch (err) {
    console.error("Login", err.message);
    res.status(500).send('Server error');
  }
});

router.post('/logout', async (req, res) => {
    try {
      // Get the token from the request headers
      const token = req.header('x-auth-token');
  
      // Invalidate the token by removing it from Redis
      redisClient.del(token);
  
      res.json({ msg: 'User logged out successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

module.exports = router;
