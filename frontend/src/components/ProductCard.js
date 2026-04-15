import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  if (!product) return null;

  return (
    <div className="product-card">

      {/* PRODUCT IMAGE */}
      <Link to={`/product/${product.id}`} className="image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>

      {/* PRODUCT INFO */}
      <div className="product-info">
        
        {/* TITLE */}
        <Link to={`/product/${product.id}`} className="product-title">
          {product.name}
        </Link>

        {/* RATING (Static for now) */}
        <div className="product-rating">
          ⭐⭐⭐⭐☆ <span>(123)</span>
        </div>

        {/* PRICE */}
        <div className="product-price">
          ₹{product.price}
        </div>

        {/* DELIVERY */}
        <div className="product-delivery">
          FREE Delivery
        </div>

        {/* BUTTON */}
        <button
          className="add-to-cart-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}