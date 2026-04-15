import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./CategoryPage.css";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  // ✅ Fetch + Filter Products
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        console.log("URL CATEGORY:", category);
        console.log("ALL PRODUCTS:", res.data);

        let filteredProducts;

        if (category.toLowerCase() === "all") {
          filteredProducts = res.data;
        } else {
          filteredProducts = res.data.filter(
            (product) =>
              product.category &&
              product.category.toLowerCase().trim() ===
                category.toLowerCase().trim()
          );
        }

        console.log("FILTERED:", filteredProducts);

        setProducts(filteredProducts);
      })
      .catch((err) => console.error(err));
  }, [category]);

  // ✅ ADD TO CART FUNCTION
  const handleAddToCart = async (productId) => {
    try {
      await axios.post("http://localhost:5000/cart", {
        product_id: productId,
      });

      alert("✅ Item added to cart");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to add to cart");
    }
  };

  return (
    <div className="category-page">
      <h2>🔥 {category} Deals</h2>

      {products.length === 0 ? (
        <h3 style={{ color: "red", textAlign: "center" }}>
          ❌ No products found
        </h3>
      ) : (
        <div className="product-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              
              {/* ✅ IMAGE */}
              <img
                src={p.image}
                alt={p.name}
                className="product-image"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/200")
                }
                onClick={() => navigate(`/product/${p.id}`)}
              />

              {/* ✅ DETAILS */}
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <p>{p.category}</p>

              {/* ✅ BUTTONS */}
              <button
                className="add-btn"
                onClick={() => handleAddToCart(p.id)}
              >
                Add to Cart
              </button>

              <button
                className="view-btn"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;