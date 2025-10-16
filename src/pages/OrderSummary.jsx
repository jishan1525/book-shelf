import { useLocation, Link } from "react-router-dom";

const OrderSummary = () => {
  const { state } = useLocation();
  const { order } = state || {};

  if (!order) {
    return (
      <div className="container text-center mt-5">
        <h2>No Order Found</h2>
        <Link to="/products" className="btn btn-primary mt-3">
          Shop Now
        </Link>
      </div>
    );
  }
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

  return (
    <div className="container mt-5">
      <h2 className="text-center"> Order Placed Successfully!</h2>
      <p>
  <strong>Date:</strong> {formatDate(order.date)}
</p>
      <p>Products:</p>
<ul>
  {order.items.map((item) => (
    <li key={item.id}>
      {item.title} — {item.quantity} × ₹{item.sellingPrice}
    </li>
  ))}
</ul>

<p>Amount Paid: ₹{order.totalPrice}</p>

<p>Delivery Address: {order.address}</p>

      <Link to="/profile" className="btn btn-primary mt-4 mb-4">
        Go to Profile
      </Link>
    </div>
  );
};

export default OrderSummary;

