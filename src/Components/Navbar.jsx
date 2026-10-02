import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="furniro-navbar">

      {/* Logo */}
      <Link to="/" className="logo">
        <img
          src="/images/logo.png"
          alt="Furniro Logo"
        />

        <span className="logo-name">Furniro</span>
      </Link>


      {/* Navigation */}
      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

      </div>


      {/* Icons */}
      <div className="nav-icons">

        <Link to="/account">
          <i className="bi bi-person"></i>
        </Link>

        <Link to="/search">
          <i className="bi bi-search"></i>
        </Link>

        <Link to="/wishlist">
          <i className="bi bi-heart"></i>
        </Link>

        <Link to="/cart">
          <i className="bi bi-cart3"></i>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;