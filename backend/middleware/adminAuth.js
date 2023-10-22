// server/middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const adminAuth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by ID and check if they are an admin
    const user = await User.findById(decoded.userId);
    if (!user.userType.includes("admin")) {
      return res.status(403).json({ msg: 'Access denied' });
    }

    // Add user to request object
    req.user = user;

    next();
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Token is invalid' });
  }
};

module.exports = adminAuth;
