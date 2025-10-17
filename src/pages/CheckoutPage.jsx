import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { addresses, addOrder } = useUser();
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }

    const newOrder = {
      id: Date.now(),
      items: cart,
      totalPrice,
      address: selectedAddress.addressLine,
      date: new Date().toISOString(),
    };

    addOrder(newOrder);
    clearCart();
    //toast 
    toast.success(`Order placed successfully!`, {
      position: "top-center",
      autoClose: 1500,
    });

    navigate("/order-summary", { state: { order: newOrder } });
  };

  return (
    <>
      
      <div className="container mt-5">
        <h3 className="mb-4 fw-bold">Select Delivery Address</h3>

        {(!addresses || addresses.length === 0) ? (
          <div className="alert alert-danger">
            No saved addresses found. Please add one from your Profile
            
          </div>
        ) : (
          addresses.map((addr) => (
            <div key={addr.id} className="form-check mb-2">
              <input
                type="radio"
                className="form-check-input"
                name="address"
                value={addr.id}
                onChange={() => setSelectedAddress(addr)}
              />
              <label className="form-check-label ms-2">
                <strong>{addr.label}:</strong> {addr.addressLine}
              </label>
            </div>
          ))
        )}

        <div className="mt-4">
          {addresses && addresses.length > 0 ? (
            <button className="btn btn-success mb-4" onClick={handlePlaceOrder}>
              Place Order
            </button>
          ) : (
            <Link to="/profile" className="btn btn-primary mb-4">
              Go to Profile
            </Link>
          )}
        </div>
        
      </div>
    </>
  );
};

export default CheckoutPage;