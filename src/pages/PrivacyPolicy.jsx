import NavBar from "../components/NavBar";

const PrivacyPolicy = () => {
  return (
    <div>
     
      <div className="container my-5">
        <h1 className="fw-bold mb-4 text-center">📚 Bookshelf Privacy Policy</h1>
        <p className="text-muted text-center mb-5">
          Last Updated: October 2025
        </p>

        <section className="mb-4">
          <h4 className="fw-semibold mb-2">1. Introduction</h4>
          <p>
            Welcome to <strong>Bookshelf</strong>. Your privacy is important to us.
            This Privacy Policy explains how we collect, use, and protect your
            personal information when you use our website and services.
          </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold mb-2">2. Information We Collect</h4>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> such as your name, email address, and contact details when you register or place an order.</li>
            <li><strong>Usage Data:</strong> including pages visited, time spent, and your interactions on the site.</li>
            <li><strong>Payment Information:</strong> handled securely through third-party payment gateways. We do not store card details.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold mb-2">3. How We Use Your Information</h4>
          <p>We use the collected data to:</p>
          <ul>
            <li>Process and manage your book orders.</li>
            <li>Improve our website, user experience, and customer support.</li>
            <li>Send order confirmations, updates, and promotional offers (only if you consent).</li>
          </ul>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold mb-2">4. Data Protection</h4>
          <p>
            We use industry-standard security measures to protect your personal
            information. However, please note that no online platform can
            guarantee 100% data security.
          </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold mb-2">5. Cookies</h4>
          <p>
            Bookshelf uses cookies to improve your browsing experience and
            analyze website traffic. You can choose to disable cookies in your
            browser settings.
          </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold mb-2">6. Third-Party Services</h4>
          <p>
            We may use trusted third-party tools (like analytics and payment
            providers) that collect data in accordance with their own privacy
            policies.
          </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold mb-2">7. Your Rights</h4>
          <p>
            You have the right to access, update, or delete your personal
            information. You can contact us anytime to request changes or
            account deletion.
          </p>
        </section>

        <section className="mb-5">
          <h4 className="fw-semibold mb-2">8. Contact Us</h4>
          <p>
            For any privacy-related concerns or questions, please contact us at: <br />
            <strong>Email:</strong> support@bookshelf.com
          </p>
        </section>

        
      </div>
    </div>
  );
};

export default PrivacyPolicy;