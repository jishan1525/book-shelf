import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


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
    date:new Date().toISOString()
  };

  addOrder(newOrder); 
  clearCart();

 
  navigate("/order-summary", { state: { order: newOrder } });
};

  return (
    <div className="container mt-5">
      <h3>Select Delivery Address</h3>
      {addresses.map((addr) => (
        <div key={addr.id} className="form-check">
          <input
            type="radio"
            name="address"
            value={addr.id}
            onChange={() => setSelectedAddress(addr)}
          />
          <label className="form-check-label ms-2">
            {addr.label}: {addr.addressLine}
          </label>
        </div>
      ))}

      <button className="btn btn-success mt-3" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;