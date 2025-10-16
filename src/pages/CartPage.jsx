import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";
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

  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();
  const [alert, setAlert] = useState("");

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(""), 1500);
  };

  const handleRemove = (id, title) => {
    removeFromCart(id);
    showAlert(`🗑️ Removed "${title}" from Cart`);
  };

  const handleIncrease = (id, title) => {
    increaseQuantity(id);
    showAlert(`Increased quantity of "${title}"`);
  };

  const handleDecrease = (id, title) => {
    decreaseQuantity(id);
    showAlert(`Decreased quantity of "${title}"`);
  };

  const handleMoveToWishlist = (item) => {
    addToWishlist(item);
    removeFromCart(item.id);
    showAlert(`Moved "${item.title}" to Wishlist`);
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
      {alert && (
        <div className="alert alert-success text-center fw-semibold">
          {alert}
        </div>
      )}

      <div className="row">
       
        <div className="col-md-8">
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

                <div className="text-end">
                  <p className="fw-bold mb-1">
                    ₹{item.sellingPrice * item.quantity}
                  </p>

                  <div className="d-flex gap-2 justify-content-end">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => handleMoveToWishlist(item)}
                    >
                      Move to Wishlist
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleRemove(item.id, item.title)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="col-md-4">
          <div className="card shadow-sm border-0 sticky-top" style={{ top: "90px" }}>
            <div className="card-body">
              <h4 className="fw-bold mb-3 text-center">Price Details</h4>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Total Items:</span>
                <span>{totalItems}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Price (Books):</span>
                <span>₹{totalPrice}</span>
              </p>
              <p className="d-flex justify-content-between">
                <span>Discount:</span>
                <span className="text-success">₹0</span>
              </p>
              <hr />
              <h5 className="d-flex justify-content-between">
                <span>Total Payable:</span>
                <span className="text-success">₹{totalPrice}</span>
              </h5>
              <button
                className="btn btn-success mt-3 w-100"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </button>
              <button
                className="btn btn-outline-danger mt-2 w-100"
                onClick={() => {
                  clearCart();
                  showAlert(" Cleared all items from Cart");
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;