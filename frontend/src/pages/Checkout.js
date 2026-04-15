import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleOrder = async () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    if (!address) {
      alert("Enter address");
      return;
    }

    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/orders", {
        user_id: user.id,
        total_amount: total,
        address,
        items: cart
      });

      // ✅ SAVE ORDER SUMMARY (IMPORTANT)
      const orderData = {
        orderId: res.data.orderId,
        items: cart,
        total,
        address
      };

      localStorage.setItem("lastOrder", JSON.stringify(orderData));

      // ✅ CLEAR CART
      clearCart();

      // ✅ REDIRECT TO SUCCESS PAGE
      navigate("/order-success");

    } catch (err) {
      console.error("❌ ERROR:", err.response?.data || err.message);
      alert("Order failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      {/* ADDRESS */}
      <textarea
        placeholder="Enter your address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{ width: "300px", height: "100px", marginBottom: "10px" }}
      />

      {/* ORDER SUMMARY */}
      <h3>Total: ₹{total}</h3>

      {/* CART ITEMS PREVIEW */}
      <h4>Items:</h4>
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <img src={item.image} alt="" width="60" />
          <p>{item.name}</p>
          <p>₹{item.price}</p>
        </div>
      ))}

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;