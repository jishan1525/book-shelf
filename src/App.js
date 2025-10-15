// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'; 
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import ProductListing from './pages/ProductListing';
import ProductDetail from './pages/ProductDetail';
import ProfilePage from './pages/ProfilePage';
import { Routes, Route } from 'react-router-dom';


import { UserProvider } from "./contexts/UserContext";
import { CartProvider } from "./contexts/CartContext";
import { WishlistProvider } from "./contexts/WishlistContext";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderSummary from './pages/OrderSummary';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <WishlistProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductListing />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/detail/:id" element={<ProductDetail />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/order-summary" element={<OrderSummary />} />

          </Routes>
          <Footer />
        </WishlistProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;