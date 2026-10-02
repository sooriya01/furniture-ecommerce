import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="furniro-footer">

      <div className="footer-container">

        <div className="footer-column footer-brand">
          <h2>Furniro</h2>
          <p>400 University Drive Suite 200</p>
          <p>Coral Gables, FL 33134 USA</p>
        </div>

        <div className="footer-column">
          <h4>Links</h4>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <Link to="/">Payment Options</Link>
          <Link to="/">Returns</Link>
          <Link to="/">Privacy Policies</Link>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>

          <div className="subscribe-box">
            <input
              type="email"
              placeholder="Enter Your Email Address"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Furniro. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;