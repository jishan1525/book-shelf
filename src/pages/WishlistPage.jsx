import { useWishlist } from "../contexts/WishlistContext";
import { useCart } from "../contexts/CartContext";
import { toast } from "react-toastify";

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleRemove = (id, title) => {
    removeFromWishlist(id);
    toast.info(`Removed "${title}" from Wishlist`, {
      position: "top-center",
      autoClose: 1500,
    });
  };

  const handleMoveToCart = (book) => {
    addToCart(book);
    removeFromWishlist(book.id);
    toast.success(`Moved "${book.title}" to Cart`, {
      position: "top-center",
      autoClose: 1500,
    });
  };

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="text-center mt-5">
        <h2 className="mb-3">Your wishlist is empty</h2>
        <p className="text-muted">Browse our books and add your favorites!</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">Your Wishlist</h2>

      <div className="row g-4">
        {wishlist.map((book) => (
          <div key={book.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card h-100 shadow-sm border-0 position-relative wishlist-card">
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{book.title}</h5>
                <p className="text-muted mb-1">{book.author}</p>
                <p className="fw-bold text-success mb-3">
                  ₹{book.sellingPrice}
                </p>

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

      
    </div>
  );
};

export default WishlistPage;