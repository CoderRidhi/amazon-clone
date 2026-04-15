import "./SearchBar.css";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const handleSubmit = (e) => {
    e.preventDefault();

    // send search data to parent (Home.js)
    onSearch({
      query,
      category,
    });
  };

  return (
    <form className="nav-search" onSubmit={handleSubmit}>
      
      {/* CATEGORY DROPDOWN */}
      <select
        className="search-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Books">Books</option>
      </select>

      {/* SEARCH INPUT */}
      <input
        type="text"
        placeholder="Search Amazon.in"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* SEARCH BUTTON */}
      <button type="submit" className="search-btn">
        🔍
      </button>
    </form>
  );
}