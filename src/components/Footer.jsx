import { Link } from "react-router-dom";
const Footer = () => {
    return (
<footer className="bg-dark text-white text-center py-3">
        <div>
          <p>&copy; 2025 Book Self. All rights reserved.</p>
          <div>
            <Link to="/privacy" className="text-white mx-2">Privacy Policy</Link>
            
            <Link to="/terms" className="text-white mx-2">Terms of Service</Link>
            <Link to="/contact" className="text-white mx-2">Contact Us</Link>
          </div>
        </div>
      </footer>
    )
}

export default Footer ;