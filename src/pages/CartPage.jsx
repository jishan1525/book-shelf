import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();

  const navigate = useNavigate();
  const [alert, setAlert] = useState("");

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(""), 1500); 
  };

  const handleRemove = (id, title) => {
    removeFromCart(id);
    showAlert(`Removed "${title}" from Cart`);
  };

  const handleIncrease = (id, title) => {
    increaseQuantity(id);
    showAlert(` Increased quantity of "${title}"`);
  };

  const handleDecrease = (id, title) => {
    decreaseQuantity(id);
    showAlert(` Decreased quantity of "${title}"`);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  if (cart.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/products" className="btn btn-primary mb-4 mt-3">
          Browse Books
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {alert && <div className="alert alert-success text-center">{alert}</div>}

      <h2 className="fw-bold mb-4">Your Cart ({totalItems} items)</h2>
      <div className="list-group">
        {cart.map((item) => (
          <div
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{item.title}</h5>
              <p className="mb-1 text-muted">₹{item.sellingPrice}</p>
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleDecrease(item.id, item.title)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleIncrease(item.id, item.title)}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <p className="fw-bold mb-1">₹{item.sellingPrice * item.quantity}</p>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleRemove(item.id, item.title)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 border rounded">
        <h4>Total: ₹{totalPrice}</h4>
        <button className="btn btn-success mt-2 w-100" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
        <button
          className="btn btn-outline-danger mt-2 w-100"
          onClick={() => {
            clearCart();
            showAlert("🗑️ Cleared all items from Cart");
          }}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;