import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../App.css";

function ProductDetails() {
  const { id } = useParams();

  // Product data
  const products = [
    {
      id: 1,
      name: "Syltherine",
      price: 2500000,
      oldPrice: 3500000,
      image: "/images/Syltherine.png",
      description:
        "Stylish and comfortable furniture designed to bring elegance and comfort to your home.",
      rating: 5,
      reviews: 12,
    },
    {
      id: 2,
      name: "Leviosa",
      price: 2500000,
      image: "/images/leviosa.png",
      description:
        "A modern and elegant furniture piece perfect for contemporary interiors.",
      rating: 5,
      reviews: 8,
    },
    {
      id: 3,
      name: "Lolito",
      price: 7000000,
      oldPrice: 14000000,
      image: "/images/lolito.png",
      description:
        "Premium furniture with a stylish design and comfortable finish.",
      rating: 4,
      reviews: 10,
    },
    {
      id: 4,
      name: "Respira",
      price: 500000,
      image: "/images/respira.jpg",
      description:
        "A simple and beautiful furniture design suitable for any room.",
      rating: 5,
      reviews: 15,
    },
    {
      id: 5,
      name: "Grifo",
      price: 1500000,
      image: "/images/grifo.jpg",
      description:
        "Modern furniture created with a clean and elegant appearance.",
      rating: 4,
      reviews: 7,
    },
    {
      id: 6,
      name: "Muggo",
      price: 150000,
      image: "/images/muggo.png",
      description:
        "Compact and stylish furniture for a modern living space.",
      rating: 5,
      reviews: 11,
    },
    {
      id: 7,
      name: "Pingky",
      price: 7000000,
      oldPrice: 14000000,
      image: "/images/pingky.jpg",
      description:
        "Beautiful premium furniture with a comfortable and luxurious design.",
      rating: 5,
      reviews: 18,
    },
    {
      id: 8,
      name: "Potty",
      price: 500000,
      image: "/images/potty.jpg",
      description:
        "Simple and elegant furniture designed for everyday use.",
      rating: 4,
      reviews: 9,
    },
  ];

  // Find product
  const product =
    products.find((item) => item.id === Number(id)) || products[0];

  // States
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("gold");
  const [message, setMessage] = useState("");

  // Increase quantity
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  // Decrease quantity
  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        return prev - 1;
      }

      return 1;
    });
  };

  // Format price
  const formatPrice = (price) => {
    return "Rp " + price.toLocaleString("id-ID");
  };

  // ADD TO CART
  const addToCart = () => {
    console.log("ADD TO CART CLICKED");

    // Get old cart
    const oldCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    console.log("OLD CART:", oldCart);

    // Check same product + same size + same color
    const existingProduct = oldCart.find(
      (item) =>
        item.id === product.id &&
        item.size === size &&
        item.color === color
    );

    let updatedCart;

    if (existingProduct) {
      // Increase existing quantity
      updatedCart = oldCart.map((item) => {
        if (
          item.id === product.id &&
          item.size === size &&
          item.color === color
        ) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }

        return item;
      });
    } else {
      // Create new cart item
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        size: size,
        color: color,
      };

      updatedCart = [...oldCart, newProduct];
    }

    // Save cart
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    console.log("UPDATED CART:", updatedCart);

    // Show message
    setMessage(`${product.name} added to cart`);

    // Remove message after 3 seconds
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="product-details-page">

      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <Link to="/">Home</Link>

        <span>›</span>

        <Link to="/shop">Shop</Link>

        <span>›</span>

        <span>{product.name}</span>
      </div>

      {/* Product Details */}
      <div className="product-details">

        {/* LEFT SIDE */}
        <div className="product-details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="product-details-content">

          {/* Product Name */}
          <h1>{product.name}</h1>

          {/* Price */}
          <h2>
            {formatPrice(product.price)}
          </h2>

          {/* Rating */}
          <div className="product-rating">

            <span>
              {"★".repeat(product.rating)}
            </span>

            <span className="rating-number">
              {product.rating}.0
            </span>

            <span className="review-count">
              {product.reviews} Reviews
            </span>

          </div>

          {/* Description */}
          <p className="product-description">
            {product.description}
          </p>

          {/* Size */}
          <div className="product-option">

            <h4>Size</h4>

            <div className="size-options">

              <button
                type="button"
                className={size === "L" ? "active-size" : ""}
                onClick={() => setSize("L")}
              >
                L
              </button>

              <button
                type="button"
                className={size === "XL" ? "active-size" : ""}
                onClick={() => setSize("XL")}
              >
                XL
              </button>

              <button
                type="button"
                className={size === "XS" ? "active-size" : ""}
                onClick={() => setSize("XS")}
              >
                XS
              </button>

            </div>

          </div>

          {/* Color */}
          <div className="product-option">

            <h4>Color</h4>

            <div className="color-options">

              <button
                type="button"
                className="color-circle purple"
                onClick={() => setColor("purple")}
                style={{
                  border:
                    color === "purple"
                      ? "3px solid #000"
                      : "none",
                }}
              ></button>

              <button
                type="button"
                className="color-circle black"
                onClick={() => setColor("black")}
                style={{
                  border:
                    color === "black"
                      ? "3px solid #000"
                      : "none",
                }}
              ></button>

              <button
                type="button"
                className="color-circle gold"
                onClick={() => setColor("gold")}
                style={{
                  border:
                    color === "gold"
                      ? "3px solid #000"
                      : "none",
                }}
              ></button>

            </div>

          </div>

          {/* Quantity + Cart */}
          <div className="product-buy-row">

            {/* Quantity */}
            <div className="quantity-box">

              <button
                type="button"
                onClick={decreaseQuantity}
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={increaseQuantity}
              >
                +
              </button>

            </div>

            {/* ADD TO CART */}
            <button
              type="button"
              className="add-cart-button"
              onClick={addToCart}
            >
              Add To Cart
            </button>

            {/* BUY NOW */}
            <button
              type="button"
              className="buy-now-button"
              onClick={() => {
                console.log("BUY NOW CLICKED");
              }}
            >
              Buy Now
            </button>

          </div>

          {/* Success Message */}
          {message && (
            <div className="cart-success-message">
              <i className="bi bi-check-circle"></i>

              {message}
            </div>
          )}

          {/* Extra Information */}
          <div className="product-extra-info">

            <p>
              <strong>SKU:</strong> Furniro-{product.id}
            </p>

            <p>
              <strong>Category:</strong> Furniture
            </p>

            <p>
              <strong>Tags:</strong> Sofa, Chair, Home
            </p>

            <p>
              <strong>Share:</strong>

              <i className="bi bi-facebook"></i>

              <i className="bi bi-instagram"></i>

              <i className="bi bi-twitter"></i>
            </p>

          </div>

        </div>

      </div>

      {/* Description Section */}
      <div className="product-description-section">

        <div className="description-tabs">

          <button
            type="button"
            className="active-tab"
          >
            Description
          </button>

          <button type="button">
            Additional Information
          </button>

          <button type="button">
            Reviews ({product.reviews})
          </button>

        </div>

        <div className="description-content">

          <p>
            {product.description}
          </p>

          <p>
            This furniture product is designed with
            comfort, quality and modern style in mind.
            It is suitable for different types of
            interior spaces.
          </p>

        </div>

      </div>

      {/* Related Products */}
      <div className="related-products">

        <h2>Related Products</h2>

        <div className="related-product-grid">

          {products
            .filter((item) => item.id !== product.id)
            .slice(0, 4)
            .map((item) => (

              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="related-product-card"
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <h3>{item.name}</h3>

                <p>
                  {formatPrice(item.price)}
                </p>

              </Link>

            ))}

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;