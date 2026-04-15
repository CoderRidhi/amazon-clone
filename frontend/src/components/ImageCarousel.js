import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ImageCarousel.css";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

function ImageCarousel({ images }) {
  const navigate = useNavigate();

  // ✅ DEFAULT BANNERS (WILL ALWAYS WORK)
  const defaultImages = [
  { img: banner1, category: "All" },
  { img: banner2, category: "Electronics" },
  { img: banner3, category: "Fashion" }
];

  // 👉 Use passed images OR fallback to default
  const bannerImages =
    images && images.length > 0 ? images : defaultImages;

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  // ✅ Click banner → category page
  const handleClick = () => {
    if (current === 0) navigate("/category/All");
    if (current === 1) navigate("/category/Electronics");
    if (current === 2) navigate("/category/Fashion");
  };

  return (
    <div className="carousel">

      {/* LEFT */}
      <button className="carousel-btn left" onClick={prevSlide}>
        ◀
      </button>

      {/* MAIN IMAGE */}
      <img
        src={bannerImages[current].img}
        alt="banner"
        className="carousel-image"
        onClick={handleClick}
      />

      {/* RIGHT */}
      <button className="carousel-btn right" onClick={nextSlide}>
        ▶
      </button>

      {/* THUMBNAILS */}
      <div className="thumbnails">
        {bannerImages.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt="thumb"
            className={`thumb ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;