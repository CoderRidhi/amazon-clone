import { useEffect, useState } from "react";

function OrderSuccess() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lastOrder"));
    setOrder(data);
  }, []);

  if (!order) return <h2>No order found</h2>;

  // 📅 DELIVERY DATE (3–5 days)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "green" }}>✅ Order Placed Successfully!</h1>

      <h3>Order ID: {order.orderId}</h3>

      <p>
        📦 Estimated Delivery:{" "}
        <strong>{deliveryDate.toDateString()}</strong>
      </p>

      <p>
        💰 Total Paid: <strong>₹{order.total}</strong>
      </p>

      <p>
        🏠 Shipping Address: <br />
        {order.address}
      </p>

      <hr />

      <h3>🛒 Items:</h3>

      {order.items.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <img src={item.image} width="80" alt="" />
          <p>{item.name}</p>
          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default OrderSuccess;