import NavBar from "../components/NavBar";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivacyPolicy = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <NavBar />
      <Container className="py-5 flex-grow-1">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 mb-5">
              <Card.Body className="p-5">
                <h1 className="display-4 fw-bold text-center text-primary mb-3">
                  📚 Bookshelf Privacy Policy
                </h1>
                <p className="text-muted text-center mb-5">
                  Last Updated: October 2025
                </p>

                <section className="mb-5">
                  <h4 className="fw-semibold mb-3 text-dark">1. Introduction</h4>
                  <p className="text-secondary">
                    Welcome to <strong>Bookshelf</strong>. Your privacy is our priority. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website and services.
                  </p>
                </section>

                <section className="mb-5">
                  <h4 className="fw-semibold mb-3 text-dark">2. Information We Collect</h4>
                  <p className="text-secondary">We may collect the following types of information:</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 ps-0">
                      <strong>Personal Information:</strong> Name, email address, and contact details provided during registration or order placement.
                    </li>
                    <li className="list-group-item border-0 ps-0">
                      <strong>Usage Data:</strong> Information about pages visited, time spent, and interactions on our site.
                    </li>
                    <li className="list-group-item border-0 ps-0">
                      <strong>Payment Information:</strong> Securely processed through trusted third-party payment gateways. We do not store your card details.
                    </li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h4 className="fw-semibold mb-3 text-dark">3. How We Use Your Information</h4>
                  <p className="text-secondary">We use your data to:</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item border-0 ps-0">Process and manage your book orders.</li>
                    <li className="list-group-item border-0 ps-0">Enhance our website, user experience, and customer support.</li>
                    <li className="list-group-item border-0 ps-0">Send order confirmations, updates, and promotional offers (with your consent).</li>
                  </ul>
                </section>

                <section className="mb-5">
                  <h4 className="fw-semibold mb-3 text-dark">4. Data Protection</h4>
                  <p className="text-secondary">
                    We implement industry-standard security measures to protect your personal information. However, no online platform can guarantee complete data security.
                  </p>
                </section>

                <section className="mb-5">
                  <h4 className="fw-semibold mb-3 text-dark">5. Cookies</h4>
                  <p className="text-secondary">
                    Bookshelf uses cookies to enhance your browsing experience and analyze website traffic. You can disable cookies via your browser settings.
                  </p>
                </section>

                <section className="mb-5">
                  <h4 className="fw-semibold mb-3 text-dark">6. Third-Party Services</h4>
                  <p className="text-secondary">
                    We may use trusted third-party tools (e.g., analytics and payment providers) that collect data per their own privacy policies.
                  </p>
                </section>

                <section className="mb-5">
                  <h4 className="fw-semibold mb-3 text-dark">7. Your Rights</h4>
                  <p className="text-secondary">
                    You have the right to access, update, or delete your personal information. Contact us to request changes or account deletion.
                  </p>
                </section>

                <section>
                  <h4 className="fw-semibold mb-3 text-dark">8. Contact Us</h4>
                  <p className="text-secondary">
                    For privacy-related concerns or questions, please reach out to us at: <br />
                    <strong>Email:</strong>{" "}
                    <a href="mailto:support@bookshelf.com" className="text-primary">
                      support@bookshelf.com
                    </a>
                  </p>
                </section>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 Bookshelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;