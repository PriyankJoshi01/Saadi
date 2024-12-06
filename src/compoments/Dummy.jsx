import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyleType: 'none', gap: '20px' }}>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>About Us</Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>Contact</Link>
        </li>
        <li>
          <Link to="/gallery" style={{ textDecoration: 'none', color: 'black' }}>Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
