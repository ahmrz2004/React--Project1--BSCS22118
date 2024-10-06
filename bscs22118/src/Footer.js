import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a href="/support" style={styles.link}>Support</a>
        <a href="/community" style={styles.link}>Community</a>
        <a href="/hosting" style={styles.link}>Hosting</a>
        <a href="/about" style={styles.link}>About</a>
      </div>
      <div style={styles.socialMedia}>
        <a href="https://facebook.com" style={styles.icon}>Facebook</a>
        <a href="https://twitter.com" style={styles.icon}>Twitter</a>
        <a href="https://instagram.com" style={styles.icon}>Instagram</a>
      </div>
      <div style={styles.copyright}>
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
  },
  links: {
    marginBottom: '10px',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#000',
  },
  socialMedia: {
    marginBottom: '10px',
  },
  icon: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#000',
  },
  copyright: {
    fontSize: '14px',
    color: '#555',
  },
};

export default Footer;
