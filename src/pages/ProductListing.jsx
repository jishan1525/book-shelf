import { useLocation, Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import booksData from "../data/booksData";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

const ProductListing = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const genres = ["Fiction", "Non-Fiction", "Mystery", "Sci-Fi"];

  const filteredBooks = useMemo(() => {
    return booksData
      .filter((book) =>
        selectedGenres.length > 0 ? selectedGenres.includes(book.genre) : true
      )
      .filter((book) => (book.rating ? book.rating >= minRating : true))
      .filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery) ||
          book.author.toLowerCase().includes(searchQuery)
      )
      .sort((a, b) => {
        if (sortOrder === "low-to-high") return a.sellingPrice - b.sellingPrice;
        if (sortOrder === "high-to-low") return b.sellingPrice - a.sellingPrice;
        return 0;
      });
  }, [selectedGenres, minRating, sortOrder, searchQuery]);

  const toggleGenre = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const clearFilters = () => {
    setSelectedGenres([]);
    setMinRating(0);
    setSortOrder("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center fw-bold">
        Books ({filteredBooks.length})
      </h2>
      <div className="row">
       
        <div className="col-md-3 mb-4">
          <div className="p-3 border rounded shadow-sm">
            <h5 className="fw-bold mb-3">Filters</h5>
            <h6 className="fw-semibold">Genre</h6>
            {genres.map((genre) => (
              <div key={genre} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={selectedGenres.includes(genre)}
                  onChange={() => toggleGenre(genre)}
                />
                <label className="form-check-label">{genre}</label>
              </div>
            ))}

            <h6 className="fw-semibold mt-3">Minimum Rating: {minRating}</h6>
            <input
              type="range"
              className="form-range"
              min="0"
              max="5"
              step="1"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
            />

            <h6 className="fw-semibold mt-3">Sort by Price</h6>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                checked={sortOrder === "low-to-high"}
                onChange={() => setSortOrder("low-to-high")}
              />
              <label className="form-check-label">Low to High</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                checked={sortOrder === "high-to-low"}
                onChange={() => setSortOrder("high-to-low")}
              />
              <label className="form-check-label">High to Low</label>
            </div>

            <button
              className="btn btn-outline-danger btn-sm w-100 mt-3"
              onClick={clearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>

       
        <div className="col-md-9">
          <div className="row g-4">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <div key={book.id} className="col-lg-4 col-md-6 col-12">
  <div className="card h-100 shadow-sm">
    <Link to={`/detail/${book.id}`} className="text-decoration-none text-dark">
      <img
        src={book.image}
        alt={book.title}
        className="card-img-top"
        style={{ height: "240px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>
        <p className="text-muted mb-1">{book.author}</p>
        <p className="fw-bold text-success mb-1">₹{book.sellingPrice}</p>
      </div>
    </Link>
    <div className="card-body">
      <button
        className="btn btn-primary btn-sm me-2"
        onClick={() => addToCart(book)}
      >
        Add to Cart
      </button>
      <button
        className="btn btn-outline-secondary btn-sm"
        onClick={() => addToWishlist(book)}
      >
        Add to Wishlist
      </button>
    </div>
  </div>
</div>
              ))
            ) : (
              <p className="text-center text-muted">
                No books match your search/filter.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
