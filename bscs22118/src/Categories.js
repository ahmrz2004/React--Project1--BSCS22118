
import React from 'react';

const categories = ["Beachfront", "Cabins", "Trending", "Mountain", "Luxury", "Farm", "Tropical", "City", "Countryside", "Skiing", "Desert"];

const Categories = () => {
  return (
    <div style={styles.categoriesWrapper}>
      <div style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <button key={index} style={styles.categoryButton}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  categoriesWrapper: {
    overflowX: 'auto',
    display: 'flex',
    padding: '10px',
    scrollbarWidth: 'thin', // For Firefox browsers
    msOverflowStyle: 'none', // For Internet Explorer and Edge
  },
  categoriesContainer: {
    display: 'flex',
    gap: '15px',
    paddingBottom: '10px',
  },
  categoryButton: {
    padding: '10px 20px',
    border: '1px solid #ddd',
    borderRadius: '30px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: 'all 0.3s ease',
    color: '#333',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  categoryButtonHover: {
    backgroundColor: '#ff5a5f',
    color: 'white',
    border: '1px solid #ff5a5f',
    transform: 'scale(1.05)',
  },
};

export default Categories;
