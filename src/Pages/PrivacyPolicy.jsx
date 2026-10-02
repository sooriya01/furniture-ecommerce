import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function PrivacyPolicy() {
  return (
    <div className="help-page">

      <div className="help-banner">
        <h1>Privacy Policy</h1>

        <p>
          <Link to="/">Home</Link>
          {" > "}
          Privacy Policy
        </p>
      </div>

      <div className="privacy-container">

        <h2>Privacy Policy</h2>

        <p>
          At Furniro, we respect your privacy and are committed
          to protecting the information you provide while using
          our website.
        </p>

        <div className="privacy-item">
          <h3>01. Information We Collect</h3>
          <p>
            We may collect information such as your name, email
            address, phone number and delivery details when you
            place an order or contact us.
          </p>
        </div>

        <div className="privacy-item">
          <h3>02. How We Use Your Information</h3>
          <p>
            Your information may be used to process orders,
            provide customer support and communicate with you
            about your orders.
          </p>
        </div>

        <div className="privacy-item">
          <h3>03. Data Protection</h3>
          <p>
            We take reasonable steps to protect your personal
            information from unauthorized access or misuse.
          </p>
        </div>

        <div className="privacy-item">
          <h3>04. Third-Party Services</h3>
          <p>
            Some services used by the website may process
            information according to their own privacy policies.
          </p>
        </div>

        <div className="privacy-item">
          <h3>05. Contact Us</h3>
          <p>
            If you have questions about this privacy policy,
            please contact our support team.
          </p>
        </div>

        <Link to="/contact" className="help-button">
          Contact Us
        </Link>

      </div>

    </div>
  );
}

export default PrivacyPolicy;
