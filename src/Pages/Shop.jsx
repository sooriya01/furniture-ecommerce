import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Shop() {
  const products = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      image: "/images/Syltherine.png",
      discount: "-30%",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/images/leviosa.png",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "/images/lolito.png",
      discount: "-50%",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      image: "/images/respira.jpg",
      tag: "New",
    },
    {
      name: "Grifo",
      price: "Rp 1.500.000",
      image: "/images/grifo.jpg",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      image: "/images/muggo.png",
      tag: "New",
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "/images/pingky.jpg",
      discount: "-50%",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      image: "/images/potty.jpg",
      tag: "New",
    },

    // Extra products
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      image: "/images/Syltherine.png",
      discount: "-30%",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      image: "/images/leviosa.png",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      image: "/images/lolito.png",
      discount: "-50%",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      image: "/images/respira.jpg",
      tag: "New",
    },
  ];

  return (
    <div className="shop-page">

      {/* ================= SHOP BANNER ================= */}

      <section className="shop-banner">

        <div className="shop-banner-content">

          <h1>Shop</h1>

          <p>
            <span>Home</span>
            <b> &gt; </b>
            Shop
          </p>

        </div>

      </section>


      {/* ================= FILTER BAR ================= */}

      <section className="shop-filter">

        <div className="filter-left">

          <button className="filter-button">
            <i className="bi bi-sliders"></i>
            Filter
          </button>

          <span className="filter-line"></span>

          <span className="showing-text">
            Showing 1–12 of 12 results
          </span>

        </div>


        <div className="filter-right">

          <label>Show</label>

          <select>
            <option>12</option>
            <option>16</option>
            <option>20</option>
          </select>

          <label>Sort by</label>

          <select className="sort-select">
            <option>Default</option>
            <option>Price Low to High</option>
            <option>Price High to Low</option>
          </select>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}

      <section className="shop-products">

        <div className="shop-product-grid">

          {products.map((product, index) => (

            <div className="shop-product-card" key={index}>

              {/* IMAGE */}

              <div className="shop-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

                {product.discount && (
                  <span className="shop-discount">
                    {product.discount}
                  </span>
                )}

                {product.tag && (
                  <span className="shop-new">
                    {product.tag}
                  </span>
                )}

                {/* HOVER BUTTONS */}

                <div className="product-hover">

                  <button>
                    Add to cart
                  </button>

                  <div className="product-actions">

                    <span>
                      <i className="bi bi-share"></i>
                      Share
                    </span>

                    <span>
                      <i className="bi bi-arrow-left-right"></i>
                      Compare
                    </span>

                    <span>
                      <i className="bi bi-heart"></i>
                      Like
                    </span>

                  </div>

                </div>

              </div>


              {/* PRODUCT DETAILS */}

              <div className="shop-product-info">

                <h3>{product.name}</h3>

                <p>Stylish furniture</p>

                <strong>
                  {product.price}
                </strong>

                {product.oldPrice && (
                  <del>
                    {product.oldPrice}
                  </del>
                )}

              </div>

            </div>

          ))}

        </div>


        {/* ================= PAGINATION ================= */}

        <div className="pagination">

          <button className="active">
            1
          </button>

          <button>
            2
          </button>

          <button>
            3
          </button>

          <button className="next-button">
            Next
          </button>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="shop-features">

        <div className="feature-item">

          <i className="bi bi-trophy"></i>

          <div>
            <h4>High Quality</h4>
            <p>Crafted from top materials</p>
          </div>

        </div>


        <div className="feature-item">

          <i className="bi bi-patch-check"></i>

          <div>
            <h4>Warranty Protection</h4>
            <p>Over 2 years</p>
          </div>

        </div>


        <div className="feature-item">

          <i className="bi bi-box-seam"></i>

          <div>
            <h4>Free Shipping</h4>
            <p>Order over 150 $</p>
          </div>

        </div>


        <div className="feature-item">

          <i className="bi bi-headset"></i>

          <div>
            <h4>24 / 7 Support</h4>
            <p>Dedicated support</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Shop;