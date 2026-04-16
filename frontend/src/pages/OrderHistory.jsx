import { useEffect, useState } from "react";

const OrderHistory = ({ userId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/orders/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log("Order History:", data);
        setOrders(data);
      })
      .catch(err => console.log(err));
  }, [userId]);

  return (
    <div>
      <h2>🧾 My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map(order => (
          <div key={order.id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
            <h3>Order #{order.id}</h3>
            <p>Total: ₹{order.total_amount}</p>
            <p>Address: {order.address}</p>

            <h4>Items:</h4>
            {order.items.map(item => (
              <div key={item.product_id}>
                <img src={item.image} width="50" />
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
                <span>₹{item.price}</span>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;