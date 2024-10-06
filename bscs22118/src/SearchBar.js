// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // Handle the search action
    console.log(`Searching for location: ${location}`);
  };

  return (
    <div style={styles.searchBarContainer}>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Where are you going?"
        style={styles.inputField}
      />
      <button onClick={handleSearch} style={styles.searchButton}>
        Search
      </button>
    </div>
  );
};

const styles = {
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '50px',
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    margin: '20px auto',
  },
  inputField: {
    flex: 1,
    padding: '10px 15px',
    border: 'none',
    borderRadius: '50px',
    outline: 'none',
    fontSize: '16px',
  },
  searchButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '30px',
    backgroundColor: '#ff5a5f',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default SearchBar;
