// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  return (
    <div className="simple-navbar">
      <div className="navbar-logo">
        🍔CLARK CAFE
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for food, beverages..." />
      </div>

      <div className="navbar-icons">
        <button>Sign in</button>
        <ShoppingCartIcon>Cart</ShoppingCartIcon>
      </div>
    </div>
  );
}

export default Navbar;


