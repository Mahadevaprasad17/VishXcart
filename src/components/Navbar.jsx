import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">VishXcart</a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}