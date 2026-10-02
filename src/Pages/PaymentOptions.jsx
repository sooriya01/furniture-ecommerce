import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function PaymentOptions() {
  return (
    <div className="help-page">

      <div className="help-banner">
        <h1>Payment Options</h1>

        <p>
          <Link to="/">Home</Link>
          {" > "}
          Payment Options
        </p>
      </div>

      <div className="help-container">

        <h2>Payment Options</h2>

        <p>
          We offer simple and secure payment options for your
          furniture orders.
        </p>

        <div className="payment-list">

          <div className="payment-card">
            <i className="bi bi-credit-card"></i>
            <h3>Credit / Debit Card</h3>
            <p>
              Pay securely using your credit or debit card.
            </p>
          </div>

          <div className="payment-card">
            <i className="bi bi-bank"></i>
            <h3>Bank Transfer</h3>
            <p>
              Complete your payment through a supported bank transfer.
            </p>
          </div>

          <div className="payment-card">
            <i className="bi bi-wallet2"></i>
            <h3>Online Payment</h3>
            <p>
              Use available online payment methods during checkout.
            </p>
          </div>

        </div>

        <Link to="/checkout" className="help-button">
          Go To Checkout
        </Link>

      </div>

    </div>
  );
}

export default PaymentOptions;