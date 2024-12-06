import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact Us</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/gallery" style={styles.navLink}>Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

// Styles object for inline styling
const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
    position: 'sticky',
    top: '0',
    width: '100%',
    boxShadow: '0 4px 2px -2px gray',
  },
  navList: {
    display: 'flex',
    justifyContent: 'center',
    margin: '0',
    padding: '0',
    listStyleType: 'none',
  },
  navItem: {
    margin: '0 15px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
};

export default Navbar;


