const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  clarkId: {
    type: String,
    required: true,
  },
  userType: {
    type: [String], 
    default: ['student'],
  },
  stripeId: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true
  },
  password: {
    type: String
  },
  
});

const User = mongoose.model('User', userSchema);
module.exports = User;
