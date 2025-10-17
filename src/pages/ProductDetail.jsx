import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import booksData from "../data/booksData";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const bookData = booksData.find((book) => book.id === Number(id));

  if (!bookData) {
    return <h2 className="text-center mt-5 text-danger">Book not found</h2>;
  }

  const handleAddToCart = () => {
    try {
      addToCart(bookData);
      toast.success(`"${bookData.title}" added to cart!`, {
        position: "top-right",
        autoClose: 1500,
      });
    } catch (error) {
      toast.error("Failed to add item to cart", {
        position: "top-right",
        autoClose: 1500,
      });
    }
  };

  const handleAddToWishlist = () => {
    try {
      addToWishlist(bookData);
      toast.success(`"${bookData.title}" added to wishlist!`, {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to add item to wishlist", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container mt-5 mb-4">
      <div className="row">
        <div className="col-md-5 text-center"> 
          <img
            src={bookData.image}
            alt={bookData.title}
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-7">
          <h1 className="fw-bold">{bookData.title}</h1>
          <p className="text-muted mb-1">{bookData.author}</p>
          <span className="badge bg-light text-dark">{bookData.genre}</span>
          <p className="mt-3">⭐ Rating: <strong>{bookData.rating}</strong></p>
          <h5>
            <span className="text-muted text-decoration-line-through me-2">₹{bookData.costPrice}</span>
            <span className="fw-bold text-success">₹{bookData.sellingPrice}</span>
            {bookData.costPrice > bookData.sellingPrice && (
              <span className="badge bg-danger ms-2">
                {Math.round(((bookData.costPrice - bookData.sellingPrice) / bookData.costPrice) * 100)}% OFF
              </span>
            )}
          </h5>

          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg me-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="btn btn-outline-secondary btn-lg"
              onClick={handleAddToWishlist}
            >
              Add to Wishlist
            </button>
          </div>

          <p className="mt-4 text-muted">
            {bookData.description ||
              "No detailed description available for this book. But trust us, it's worth reading!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
