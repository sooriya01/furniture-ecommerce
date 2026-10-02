import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Cart() {

    const [cart, setCart] = useState([]);

    // Get cart from localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    // Remove product
    const removeItem = (id) => {

        const updatedCart = cart.filter(
            (item) => item.id !== id
        );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    // Increase quantity
    const increaseQuantity = (id) => {

        const updatedCart = cart.map((item) =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    // Decrease quantity
    const decreaseQuantity = (id) => {

        const updatedCart = cart.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );

        setCart(updatedCart);

        localStorage.setItem(
            "cart",
            JSON.stringify(updatedCart)
        );
    };

    // Total
    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    const formatPrice = (price) => {
        return "Rp " + price.toLocaleString("id-ID");
    };

    return (
        <div className="cart-page">

            {/* Banner */}
            <div className="cart-banner">
                <h1>Cart</h1>

                <p>
                    <Link to="/">Home</Link>
                    <span> &gt; </span>
                    Cart
                </p>
            </div>


            {/* Cart */}
            {cart.length === 0 ? (

                <div className="empty-cart">

                    <h2>Your Cart is Empty</h2>

                    <p>
                        You haven't added any products yet.
                    </p>

                    <Link to="/shop">
                        <button>Continue Shopping</button>
                    </Link>

                </div>

            ) : (

                <div className="cart-container">

                    {/* Cart Items */}
                    <div className="cart-items">

                        <div className="cart-header">

                            <span>Product</span>
                            <span>Price</span>
                            <span>Quantity</span>
                            <span>Subtotal</span>
                            <span></span>

                        </div>


                        {cart.map((item) => (

                            <div
                                className="cart-item"
                                key={item.id}
                            >

                                {/* Product */}
                                <div className="cart-product">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div>
                                        <h3>{item.name}</h3>

                                        <p>
                                            Size: {item.size}
                                        </p>

                                        <p>
                                            Color: {item.color}
                                        </p>
                                    </div>

                                </div>


                                {/* Price */}
                                <div>
                                    {formatPrice(item.price)}
                                </div>


                                {/* Quantity */}
                                <div className="cart-quantity">

                                    <button
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                    >
                                        −
                                    </button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                    >
                                        +
                                    </button>

                                </div>


                                {/* Subtotal */}
                                <div>

                                    {formatPrice(
                                        item.price * item.quantity
                                    )}

                                </div>


                                {/* Delete */}
                                <button
                                    className="delete-cart"
                                    onClick={() =>
                                        removeItem(item.id)
                                    }
                                >
                                    <i className="bi bi-trash"></i>
                                </button>

                            </div>

                        ))}

                    </div>


                    {/* Cart Total */}
                    <div className="cart-total">

                        <h2>Cart Totals</h2>

                        <div className="total-row">

                            <span>Subtotal</span>

                            <strong>
                                {formatPrice(total)}
                            </strong>

                        </div>

                        <div className="total-row">

                            <span>Total</span>

                            <strong>
                                {formatPrice(total)}
                            </strong>

                        </div>

                        <Link
                            to="/checkout"
                            className="checkout-button"
                        >
                            Check Out
                        </Link>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Cart;