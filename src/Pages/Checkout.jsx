import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Checkout() {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCart(savedCart);
    }, []);

    const subtotal = cart.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    const formatPrice = (price) => {
        return "Rp " + price.toLocaleString("id-ID");
    };

    const handleOrder = (e) => {
        e.preventDefault();

        alert("Order placed successfully!");

        localStorage.removeItem("cart");

        window.location.href = "/";
    };

    return (
        <div className="checkout-page">

            {/* Banner */}
            <div className="checkout-banner">
                <h1>Checkout</h1>
                <p>
                    <Link to="/">Home</Link>
                    {" > "} Checkout
                </p>
            </div>

            <div className="checkout-container">

                {/* Billing Details */}
                <div className="billing-details">

                    <h2>Billing Details</h2>

                    <form onSubmit={handleOrder}>

                        <div className="name-row">

                            <div>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    required
                                />
                            </div>

                            <div>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    required
                                />
                            </div>

                        </div>

                        <label>Company Name (Optional)</label>
                        <input type="text" />

                        <label>Country / Region</label>

                        <select required>
                            <option value="">
                                Select Country
                            </option>
                            <option>India</option>
                            <option>Indonesia</option>
                            <option>United States</option>
                            <option>United Kingdom</option>
                        </select>

                        <label>Street Address</label>

                        <input
                            type="text"
                            required
                        />

                        <label>Town / City</label>

                        <input
                            type="text"
                            required
                        />

                        <label>Province</label>

                        <input
                            type="text"
                            required
                        />

                        <label>ZIP Code</label>

                        <input
                            type="text"
                            required
                        />

                        <label>Phone</label>

                        <input
                            type="tel"
                            required
                        />

                        <label>Email Address</label>

                        <input
                            type="email"
                            required
                        />

                        <label>Additional Information</label>

                        <textarea
                            rows="4"
                            placeholder="Additional information"
                        ></textarea>

                        <button
                            type="submit"
                            className="place-order-button"
                        >
                            Place Order
                        </button>

                    </form>

                </div>

                {/* Order Summary */}
                <div className="order-summary">

                    <h2>Product</h2>

                    {cart.map((item) => (

                        <div
                            className="checkout-product"
                            key={`${item.id}-${item.size}-${item.color}`}
                        >

                            <div>
                                <strong>
                                    {item.name}
                                </strong>

                                <p>
                                    Qty: {item.quantity}
                                </p>

                                <p>
                                    Size: {item.size}
                                </p>

                                <p>
                                    Color: {item.color}
                                </p>
                            </div>

                            <span>
                                {formatPrice(
                                    item.price *
                                    item.quantity
                                )}
                            </span>

                        </div>

                    ))}

                    <div className="checkout-row">
                        <span>Subtotal</span>
                        <strong>
                            {formatPrice(subtotal)}
                        </strong>
                    </div>

                    <div className="checkout-row">
                        <span>Total</span>
                        <strong>
                            {formatPrice(subtotal)}
                        </strong>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Checkout;