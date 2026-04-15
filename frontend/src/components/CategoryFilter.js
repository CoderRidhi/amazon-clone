import "./CategoryFilter.css";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="category-container">
      
      {/* ALL BUTTON */}
      <button
        className={selectedCategory === "All" ? "active" : ""}
        onClick={() => onSelectCategory("All")}
      >
        All
      </button>

      {/* DYNAMIC CATEGORIES */}
      {categories.map((category, index) => (
        <button
          key={index}
          className={selectedCategory === category ? "active" : ""}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}

    </div>
  );
}