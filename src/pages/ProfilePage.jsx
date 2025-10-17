import { useState } from "react";
import { useUser } from "../contexts/UserContext";

const ProfilePage = () => {
  const {
    user,
    addresses,
    addAddress,
    removeAddress,
    updateAddress,
    orders,
    removeOrder,
  } = useUser();
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-IN", {
      day: "numeric",
      month: "long", 
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const [newAddress, setNewAddress] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [editingAddressValue, setEditingAddressValue] = useState("");

  const handleAddAddress = () => {
    if (!newAddress.trim()) return;
    addAddress({ label: "Other", addressLine: newAddress });
    setNewAddress("");
    setShowForm(false);
  };

  const handleSaveEdit = (id) => {
    if (!editingAddressValue.trim()) return;
    updateAddress(id, { addressLine: editingAddressValue });
    setEditingAddressId(null);
    setEditingAddressValue("");
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">👤 User Profile</h2>

      <section className="mb-4">
        <h5 className="border-bottom pb-2 mb-3">Personal Details</h5>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </section>

      <section className="mb-4">
        <h5 className="border-bottom pb-2 mb-3">Saved Addresses</h5>
        {addresses.length > 0 ? (
          addresses.map((addr) => (
            <div key={addr.id} className="border rounded p-3 mb-3">
              {editingAddressId === addr.id ? (
                <div className="mb-2">
                  <textarea
                    className="form-control mb-2"
                    rows="2"
                    value={editingAddressValue}
                    onChange={(e) => setEditingAddressValue(e.target.value)}
                  />
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleSaveEdit(addr.id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => setEditingAddressId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="row align-items-start">
                  <div className="col-12 col-md-8 mb-2 mb-md-0">
                    <div className="text-break">
                      <strong>{addr.label}:</strong>
                      <span className="ms-1">{addr.addressLine}</span>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          setEditingAddressId(addr.id);
                          setEditingAddressValue(addr.addressLine);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeAddress(addr.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-muted">No saved addresses yet.</p>
        )}

        {showForm ? (
          <div className="border rounded p-3 mt-3">
            <textarea
              className="form-control mb-2"
              rows="2"
              placeholder="Enter new address..."
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button className="btn btn-success btn-sm" onClick={handleAddAddress}>
                Save
              </button>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button className="btn btn-primary btn-sm mt-2" onClick={() => setShowForm(true)}>
            + Add New Address
          </button>
        )}
      </section>
        
      <section className="card shadow-sm p-4">
        <h5 className="fw-semibold mb-3">🧾 Order History</h5>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="border rounded p-3 mb-3">
              <h6>Order ID: {order.id}</h6>
              <p>
                <strong>Date:</strong> {formatDate(order.date)}
              </p>
              <ul>
                {order.items?.map((item) => (
                  <li key={item.id}>
                    {item.title} × {item.quantity} — ₹{item.sellingPrice * item.quantity}
                  </li>
                ))}
              </ul>
              <h6>Total: ₹{order.totalPrice}</h6>
            </div>
          ))
        ) : (
          <p className="text-muted">No orders placed yet.</p>
        )}
      </section>
    </div>
  );
};

export default ProfilePage;
