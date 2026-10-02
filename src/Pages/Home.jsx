import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {

  // PRODUCTS
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
  ];

  return (
    <div>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-box">

          <p className="small-title">
            New Arrival
          </p>

          <h1>
            Discover Our
            <br />
            New Collection
          </h1>

          <p>
            Discover stylish furniture designed
            <br />
            for your beautiful home.
          </p>

          <button>
            BUY NOW
          </button>

        </div>

      </section>


      {/* ================= BROWSE THE RANGE ================= */}

      <section className="range-section">

        <h2>
          Browse The Range
        </h2>

        <p className="section-subtitle">
          Explore our beautiful furniture collection
        </p>

        <div className="range-container">

          {/* DINING */}

          <div className="range-card">

            <img
              src="/images/dinning.png" alt="Dining"
            />

            <h3>
              Dining
            </h3>

          </div>


          {/* LIVING */}

          <div className="range-card">

            <img
              src="/images/living room.png"
              alt="Living"
            />

            <h3>
              Living
            </h3>

          </div>


          {/* BEDROOM */}

          <div className="range-card">

            <img
              src="/images/bedroom.png"
              alt="Bedroom"
            />

            <h3>
              Bedroom
            </h3>

          </div>

        </div>

      </section>


      {/* ================= OUR PRODUCTS ================= */}

      <section className="products-section">

        <h2>
          Our Products
        </h2>

        <div className="product-grid">

          {products.map((product, index) => (

            <div
              className="product-card"
              key={index}
            >

              <div className="product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />


                {/* DISCOUNT */}

                {product.discount && (

                  <span className="discount">
                    {product.discount}
                  </span>

                )}


                {/* NEW */}

                {product.tag && (

                  <span className="new-tag">
                    {product.tag}
                  </span>

                )}

              </div>


              <div className="product-info">

                <h3>
                  {product.name}
                </h3>

                <p>
                  Stylish furniture
                </p>

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


        <button className="show-more">
          Show More
        </button>

      </section>


      {/* ================= INSPIRATION ================= */}

      <section className="inspiration">

        <div className="inspiration-content">

          <h2>
            50+ Beautiful rooms
            <br />
            inspiration
          </h2>

          <p>
            Our designer already made a lot of
            beautiful prototype of rooms that
            inspire you.
          </p>

          <button>
            Explore More
          </button>

        </div>


        <div className="inspiration-image">

          <img
            src="/images/img1.png"
            alt="Beautiful room"
          />

        </div>

      </section>


      {/* ================= FURNIRO GALLERY ================= */}

      <section className="gallery-section">

        <p>
          Share your setup with
        </p>

        <h2>
          Furniro Furniture
        </h2>


        <div className="gallery">

          <img
            src="/images/img1.png"
            alt="Furniture 1"
          />

          <img
            src="/images/img2.png"
            alt="Furniture 2"
          />

          <img
            src="/images/img3.png"
            alt="Furniture 3"
          />

          <img
            src="/images/img4.png"
            alt="Furniture 4"
          />

          <img
            src="/images/img5.png"
            alt="Furniture 5"
          />

          <img
            src="/images/img6.png"
            alt="Furniture 6"
          />

          <img
            src="/images/img7.png"
            alt="Furniture 7"
          />

          <img
            src="/images/img8.png"
            alt="Furniture 8"
          />

          <img
            src="/images/img9.png"
            alt="Furniture 9"
          />

          <img
            src="/images/img10.png"
            alt="Furniture 10"
          />

        </div>

      </section>


    </div>
  );
}

export default Home;