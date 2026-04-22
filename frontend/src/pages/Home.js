import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

import CategoryFilter from "../components/CategoryFilter";
import ImageCarousel from "../components/ImageCarousel";
import "./Home.css";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 🔥 BANNER IMAGES (Amazon-style)
  const bannerImages = [
  { img: banner1, category: "All" },
  { img: banner2, category: "Electronics" },
  { img: banner3, category: "Fashion" }
];

  // ✅ FETCH PRODUCTS
  useEffect(() => {
    axios
      .get(`https://amazon-clone-backend-34ux.onrender.com/products`)
      .then((res) => {
        console.log("🔥 API DATA:", res.data);
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ HANDLE SEARCH
  const handleSearch = ({ query, category }) => {
    setSearchQuery(query);
    setSelectedCategory(category);
  };

  // ✅ HANDLE CATEGORY CLICK
  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  // ✅ APPLY FILTERING
  useEffect(() => {
    let result = products;

    // filter by search
    if (searchQuery) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // filter by category
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    setFiltered(result);
  }, [searchQuery, selectedCategory, products]);

  // ✅ DYNAMIC CATEGORIES
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="home">

      {/* 🔥 HERO BANNER */}
      <div className="home-banner">
        <ImageCarousel images={bannerImages} />
      </div>

      

      {/* 🧩 CATEGORY FILTER */}
      <CategoryFilter
        categories={categories.filter((c) => c !== "All")}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategory}
      />

      {/* 🛍️ PRODUCT GRID */}
      <div className="product-grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>

    </div>
  );
}