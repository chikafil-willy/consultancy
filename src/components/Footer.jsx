import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}
        <div className="footer-section">
          <h3>SafeMum Initiative</h3>
          <p>
            Promoting safe motherhood through education, community engagement,
            and access to quality maternal healthcare services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/programmes">Programmes</Link></li>
            <li><Link to="/news-event">News & Events</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* About Us (was Contact Info) */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          
          <p>Email: safemuminitiative@gmail.com</p>
          <p>Phone: +234-8086-0600-08</p>
          <p>Location: Nigeria</p>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>Instagram: @safemuminitiative</p>
          <p>TikTok: @safemuminitiative</p>
          <p>Facebook: SafeMum Initiative</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SafeMum Initiative. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;