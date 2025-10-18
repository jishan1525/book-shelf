import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useWishlist } from "../contexts/WishlistContext";

const NavBar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get("search") || "";
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  const handleSearchChange = (e) => {
  const value = e.target.value;
  setSearchTerm(value);

  const params = new URLSearchParams(location.search);
  if (value.trim()) {
    params.set("search", value.trim());
  } else {
    params.delete("search");
  }
  navigate(`${location.pathname}?${params.toString()}`, { replace: true });
};

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    if (searchTerm.trim()) {
      params.set("search", searchTerm.trim());
    } else {
      params.delete("search");
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg sticky-top">
        <div className="container-fluid px-4">
         
          <Link className="navbar-brand fw-bold fs-4 text-light" to="/">
             Book Shelf
          </Link>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/products">
                  Products
                </Link>
              </li>
            </ul>

            <form
              className="d-none d-lg-flex mx-auto"
              style={{ width: "50%", minWidth: "450px" }}
              onSubmit={handleSearchSubmit}
            >
              <div className="input-group">
                <input
                  type="search"
                  className="form-control form-control-lg bg-dark text-light border-secondary"
                  placeholder="Search books by title or author..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button className="btn btn-outline-light px-4" type="submit">
                  Search
                </button>
              </div>
            </form>

            
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/wishlist">
                   Wishlist ({wishlist.length})
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/cart">
                   Cart ({cart.length})
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/profile">
                   Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <div className="d-lg-none bg-dark py-2 px-3 border-top shadow-sm sticky-top">
        <form className="input-group" onSubmit={handleSearchSubmit}>
          <input
            type="search"
            className="form-control form-control-lg bg-dark text-light border-secondary"
            placeholder="Search books..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-light px-4" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default NavBar;