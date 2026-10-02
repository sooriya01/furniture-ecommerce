import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-banner">
        <h1>Contact</h1>

        <p>
          <Link to="/">Home</Link>
          {" > "}
          Contact
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="contact-info-item">
            <i className="bi bi-geo-alt-fill"></i>

            <div>
              <h3>Address</h3>
              <p>
                400 University Drive Suite 200
                <br />
                Coral Gables, FL 33134 USA
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <i className="bi bi-telephone-fill"></i>

            <div>
              <h3>Phone</h3>
              <p>+1 234 567 890</p>
            </div>
          </div>

          <div className="contact-info-item">
            <i className="bi bi-clock-fill"></i>

            <div>
              <h3>Working Time</h3>
              <p>
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>


        <div className="contact-form">

          <h2>Get In Touch With Us</h2>

          <p>
            For more information about our products and services,
            please feel free to contact us.
          </p>

          <form>

            <label>Your Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
            />

            <label>Message</label>
            <textarea
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Submit
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;
