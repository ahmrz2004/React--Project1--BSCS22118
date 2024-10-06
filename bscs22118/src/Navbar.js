import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Airbnb</div>
      <ul style={styles.navLinks}>
        <li style={styles.navLink}>Home</li>
        <li style={styles.navLink}>Experiences</li>
        <li style={styles.navLink}>Online Experiences</li>
        <li style={styles.navLink}>Login</li>
        <li style={styles.navLink}>Signup</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 15px',// Increased padding for better spacing
    backgroundColor: '#FF5A5F',
    color: 'white',
    width: '97%', // Full-width navbar
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px', // Increased gap for better spacing
  },
  navLink: {
    textDecoration: 'none',
    color: 'white', // Keeping text color white
    transition: 'color 0.3s', // Smooth color transition for hover effect
  },
  navLinkHover: {
    color: '#FFC0CB', // Light pink color on hover
  },
};

export default Navbar;
