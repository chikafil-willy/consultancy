import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-section">
        <img src="/logo.jpg" alt="Consultancy Logo" className="logo" />
        <h1></h1>
      </div>

      {/* Hamburger toggle (mobile only) */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation links */}
      <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/request" onClick={() => setMenuOpen(false)}>Request Services</Link>
        <Link to="/news-event" onClick={() => setMenuOpen(false)}>News/Events</Link>
      </nav>
    </header>
  );
}
