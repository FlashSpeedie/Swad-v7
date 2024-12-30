import React from 'react';
import './TermsConditions.css';

const TermsConditions = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>
      <div className="terms-content">
        <h2>Overview</h2>
        <p>By accessing Swad’s services, you agree to the terms outlined here. Please read them carefully before proceeding.</p>

        <h2>Permitted Use</h2>
        <p>Our services are intended for personal, non-commercial use. You must ensure all activities on our website comply with local laws.</p>

        <h2>Privacy Assurance</h2>
        <p>We prioritize your privacy. Please refer to our Privacy Policy for detailed information on data collection and usage.</p>

        <h2>Service Limitations</h2>
        <p>Swad is not responsible for interruptions in services or errors arising due to third-party integrations or user actions.</p>

        <h2>Changes to Terms</h2>
        <p>We may update these terms periodically. Continued use of our services implies agreement to the updated terms.</p>

        <h2>Contact Us</h2>
        <p>For questions about these terms, please reach out to us at <a href="mailto:support@swad.com">support@swad.com</a>.</p>
      </div>
    </div>
  );
};

export default TermsConditions;
