import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    getTotal,
  } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (
    <div className="cart-page">

      {/* LEFT: CART ITEMS */}
      <div className="cart-left">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">

              {/* IMAGE */}
              <img src={item.image} alt={item.name} />

              {/* DETAILS */}
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p className="price">₹{item.price}</p>

                {/* QUANTITY CONTROLS */}
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                {/* REMOVE */}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          ))
        )}
      </div>
      

      {/* RIGHT: SUMMARY */}
      <div className="cart-right">

        <h3>
        Subtotal ({totalItems} items): <strong>₹{getTotal()}</strong>
        </h3>

        <button 
        onClick={() => {
            if (!user) {
            alert("Please login first");
            navigate("/login");
            } else {
            navigate("/checkout");
            }
        }}
        >
        Proceed to Checkout
        </button>
      </div>

    </div>
  );
}