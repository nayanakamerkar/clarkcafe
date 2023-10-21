// client/src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Clark Cafe
      </Link>
      <div className="navbar-links">
        <Link to="/register" className="navbar-item">
          Register
        </Link>
        <Link to="/signin" className="navbar-item">
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
