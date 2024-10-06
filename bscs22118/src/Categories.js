import React, { useState } from 'react';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = ['All', 'Experiences', 'Online Experiences', 'Staycations'];

  return (
    <div style={styles.container}>
      {categories.map((category, index) => (
        <button
          key={index}
          style={{
            ...styles.categoryButton,
            backgroundColor: activeCategory === category ? '#FF5A5F' : '#fff',
            color: activeCategory === category ? '#fff' : '#000',
          }}
          onClick={() => setActiveCategory(category)} // Set active category
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },
  categoryButton: {
    border: 'none',
    padding: '10px 20px',
    margin: '0 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Categories;
