import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Returns() {
  return (
    <div className="help-page">

      <div className="help-banner">
        <h1>Returns</h1>

        <p>
          <Link to="/">Home</Link>
          {" > "}
          Returns
        </p>
      </div>

      <div className="returns-container">

        <h2>Returns & Refunds</h2>

        <p>
          We want you to be happy with your purchase. If you
          need to return a product, please follow the information
          below.
        </p>

        <div className="return-item">
          <h3>01. Return Request</h3>
          <p>
            Contact our support team and provide your order
            details to start a return request.
          </p>
        </div>

        <div className="return-item">
          <h3>02. Product Condition</h3>
          <p>
            Products should be returned in their original
            condition and packaging where applicable.
          </p>
        </div>

        <div className="return-item">
          <h3>03. Return Review</h3>
          <p>
            Our team will review the return request and provide
            the next steps.
          </p>
        </div>

        <div className="return-item">
          <h3>04. Refund</h3>
          <p>
            Once the return is approved, the applicable refund
            will be processed using the available payment method.
          </p>
        </div>

        <Link to="/contact" className="help-button">
          Contact Us
        </Link>

      </div>

    </div>
  );
}

export default Returns;