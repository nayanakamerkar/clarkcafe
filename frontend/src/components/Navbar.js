// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="simple-navbar">
      <div className="navbar-logo">
        🍔GRUBHUB
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for food, beverages..." />
      </div>

      <div className="navbar-icons">
        <span>👤 Sign in</span>
        <span>🛒</span>
      </div>
    </div>
  );
}

export default Navbar;


