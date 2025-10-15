import { useState } from "react";
import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [alert, setAlert] = useState("");

  const showAlert = (message) => {
    setAlert(message);
    setTimeout(() => setAlert(""), 1500); 
  };

  const handleRemove = (id, title) => {
    removeFromWishlist(id);
    showAlert(` Removed "${title}" from Wishlist`);
  };

  const handleMoveToCart = (book) => {
    addToCart(book);
    removeFromWishlist(book.id);
    showAlert(` Moved "${book.title}" to Cart`);
  };

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2 className="mb-3">Your wishlist is empty </h2>
        <p className="text-muted">Browse our books and add your favorites!</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {alert && (
        <div className="alert alert-success text-center">{alert}</div>
      )}

      <h2 className="mb-4 text-center fw-bold">Your Wishlist </h2>
      <div className="row g-4">
        {wishlist.map((book) => (
          <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0 position-relative wishlist-card">
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{book.title}</h5>
                <p className="text-muted mb-1">{book.author}</p>
                <p className="fw-bold text-success mb-3">₹{book.sellingPrice}</p>

                <div className="mt-auto d-flex gap-2">
                  <button
                    className="btn btn-danger flex-fill"
                    onClick={() => handleRemove(book.id, book.title)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-primary flex-fill"
                    onClick={() => handleMoveToCart(book)}
                  >
                    Move to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .wishlist-card:hover img {
            transform: scale(1.05);
          }
          .wishlist-card .card-body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .btn {
            transition: transform 0.2s;
          }
          .btn:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
};

export default WishlistPage;