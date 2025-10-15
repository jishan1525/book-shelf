import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap"; 
const HomePage = () => {
  return (
    <div className="bg-light min-vh-100"> 
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-3">Welcome to Book Shelf</h1> 
          <p className="lead">Discover your next great read from our vast collection of books.</p>
          <Link to="/products" className="btn btn-light btn-lg mt-3">Shop Now</Link> 
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <Carousel>
   
            <Carousel.Item>
              <img className="d-block w-100 rounded" src="https://images.unsplash.com/photo-1683178862099-325f9b29e081?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Book 1" />
              <Carousel.Caption>
                <h3>Fresh Off the Press</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded" src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Book 2" />
              <Carousel.Caption>
                <h3>Endless Adventures Await</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded" src="https://images.unsplash.com/photo-1676487093282-f6a47e02848f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Book 1" />
              <Carousel.Caption>
                <h3>Inspire Your Mind</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 rounded" src="https://images.unsplash.com/photo-1711701201402-54745024530a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Book 1" />
              <Carousel.Caption>
                <h3>Top Picks on Sale</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-4">Featured Categories</h2>
          <div className="row justify-content-center">
            
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-lg border-0 rounded"> 
                <div className="card-body text-center">
                  <h5 className="card-title">Fiction</h5>
                  <p className="card-text">Immerse yourself in captivating stories.</p>
                  <Link to="/products/Fiction" className="btn btn-outline-success">Explore</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-lg border-0 rounded">
                <div className="card-body text-center">
                  <h5 className="card-title">Non-Fiction</h5>
                  <p className="card-text">Gain knowledge from real-world insights.</p>
                  <Link to="/products/Non-Fiction" className="btn btn-outline-success">Explore</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card abs h-100 border-0 rounded">
                <div className="card-body text-center">
                  <h5 className="card-title">Mystery</h5>
                  <p className="card-text">Solve puzzles and uncover secrets with your skill.</p>
                  <Link to="/products/Mystery" className="btn btn-outline-success">Explore</Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card h-100 shadow-lg border-0 rounded">
                <div className="card-body text-center">
                  <h5 className="card-title">Sci-Fi</h5>
                  <p className="card-text">Journey to futuristic worlds and science.</p>
                  <Link to="/products/Sci-Fi" className="btn btn-outline-success">Explore</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      
    </div>
  );
};

export default HomePage;
