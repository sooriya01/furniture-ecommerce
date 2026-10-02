import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function About() {
    return (
        <div className="about-page">

            <div className="about-banner">
                <h1>About Us</h1>

                <p>
                    <Link to="/">Home</Link>
                    {" > "} About
                </p>
            </div>

            <section className="about-section">

                <div className="about-image">
                    <img
                        src="/images/muggo.png"
                        alt="Living Room"
                    />
                </div>

                <div className="about-content">

                    <h2>Welcome to Furniro</h2>

                    <p>
                        Furniro is a furniture store focused on
                        bringing stylish and comfortable furniture
                        into modern homes.
                    </p>

                    <p>
                        We offer carefully selected furniture
                        designed to make your living spaces
                        beautiful, comfortable and functional.
                    </p>

                    <Link
                        to="/shop"
                        className="about-button"
                    >
                        Explore Our Products
                    </Link>

                </div>

            </section>

        </div>
    );
}

export default About;