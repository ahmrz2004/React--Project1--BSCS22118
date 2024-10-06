import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term on input change
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    alert('Searching for: ' + searchTerm); // Display search term for demonstration
    setSearchTerm(''); // Clear the search input after submission
  };

  return (
    <form onSubmit={handleSearchSubmit} style={styles.searchForm}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for places..."
        style={styles.searchInput}
      />
      <button type="submit" style={styles.searchButton}>
        Search
      </button>
    </form>
  );
};

const styles = {
  searchForm: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  searchInput: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    width: '300px', // Adjust width for better visibility
  },
  searchButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#FF5A5F',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default SearchBar;
