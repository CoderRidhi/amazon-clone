import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import ImageCarousel from "../components/ImageCarousel";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  // ✅ FETCH PRODUCT BY ID
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  // LOADING STATE
  if (!product) {
    return <h2 style={{ padding: "20px" }}>Loading...</h2>;
  }

  return (
    <div className="product-detail">

      {/* LEFT: IMAGE CAROUSEL */}
      <div className="detail-left">
        <ImageCarousel images={product.images || [product.image]} />
      </div>

      {/* CENTER: PRODUCT INFO */}
      <div className="detail-center">
        <h2 className="title">{product.name}</h2>

        <div className="rating">
          ⭐⭐⭐⭐☆ <span>(120 reviews)</span>
        </div>

        <hr />

        <h1 className="price">₹{product.price}</h1>

        <p className="description">
          {product.description || "No description available."}
        </p>

        <p className="stock">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>
      </div>

      {/* RIGHT: BUY BOX */}
      <div className="detail-right">
        <h2>₹{product.price}</h2>
        <p>FREE Delivery</p>

        <p className="stock">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
          disabled={product.stock === 0}
        >
          Add to Cart
        </button>

        <button
          className="buy-btn"
          disabled={product.stock === 0}
        >
          Buy Now
        </button>
      </div>

    </div>
  );
}