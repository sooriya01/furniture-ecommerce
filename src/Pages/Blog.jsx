import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Blog() {
  const blogs = [
    {
      id: 1,
      image: "/images/img1.png",
      title: "How to Create a Beautiful Living Room",
      date: "20 Sep 2026",
      description:
        "Simple furniture ideas to make your living room comfortable and stylish."
    },
    {
      id: 2,
      image: "/images/img2.png",
      title: "Modern Furniture for Your Home",
      date: "15 Sep 2026",
      description:
        "Discover modern furniture ideas for creating a beautiful home."
    },
    {
      id: 3,
      image: "/images/img3.png",
      title: "Tips for Choosing the Right Furniture",
      date: "10 Sep 2026",
      description:
        "Useful tips to help you choose furniture that matches your space."
    }
  ];

  return (
    <div className="blog-page">

      {/* Banner */}
      <div className="blog-banner">
        <h1>Blog</h1>

        <p>
          <Link to="/">Home</Link>
          {" > "}
          Blog
        </p>
      </div>

      {/* Blog Section */}
      <div className="blog-container">

        <div className="blog-list">

          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>

              <img
                src={blog.image}
                alt={blog.title}
              />

              <div className="blog-content">

                <p className="blog-date">
                  {blog.date}
                </p>

                <h2>{blog.title}</h2>

                <p>
                  {blog.description}
                </p>

                <Link to="/" className="read-more">
                  Read More
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Blog;