import React from 'react';
import './PrivacyPolicy.css';

const Policy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-intro">
        Thank you for choosing Swad! We are committed to safeguarding your personal information. This Privacy Policy explains how we collect, use, and protect your data when you interact with our services.
      </p>

      <section className="privacy-section">
        <h2 className="privacy-section-title">1. Data We Gather</h2>
        <p className="privacy-text">
          We collect the following types of information to enhance your experience:
        </p>
        <ul className="privacy-list">
          <li>Your contact details like name, email, and phone number.</li>
          <li>Order and payment information for transactions.</li>
          <li>Feedback and preferences shared on our platform.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-section-title">2. How We Use Your Data</h2>
        <p className="privacy-text">
          The data we gather helps us:
        </p>
        <ul className="privacy-list">
          <li>Ensure smooth order delivery and dining reservations.</li>
          <li>Provide you with personalized recommendations and offers.</li>
          <li>Improve our services based on your feedback.</li>
        </ul>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-section-title">3. Security Measures</h2>
        <p className="privacy-text">
          We use advanced encryption and security protocols to protect your data. However, we encourage you to maintain secure passwords and access practices.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-section-title">4. Sharing with Trusted Partners</h2>
        <p className="privacy-text">
          Your data is shared only with verified partners necessary for order fulfillment and payments. We do not sell your information to third parties.
        </p>
      </section>

      <section className="privacy-section">
        <h2 className="privacy-section-title">5. Your Rights</h2>
        <p className="privacy-text">
          You may request access, correction, or deletion of your data. You can also opt-out of receiving promotional communications.
        </p>
      </section>

      <footer className="privacy-policy-footer">
        <p>Contact us at <a href="mailto:support@swad.com">support@swad.com</a> for any questions or concerns about your privacy.</p>
      </footer>
    </div>
  );
};

export default Policy;
