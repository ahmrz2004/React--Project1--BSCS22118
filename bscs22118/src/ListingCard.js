import React from 'react';

const styles = {
  card: {
    flex: '1 1 23%', // Ensures each card takes up roughly 23% of the container's width
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardInfo: {
    padding: '10px',
    backgroundColor: '#fff',
  },
  cardTitle: {
    margin: '5px 0',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: '14px',
    color: '#555',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  rating: {
    color: '#ff9800', // Gold color for rating stars
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
};

const ListingCard = ({ 
  image, 
  title, 
  propertyType, 
  guests, 
  bedrooms, 
  bathrooms, 
  price, 
  rating 
}) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.cardInfo}>
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardDetails}>{propertyType}</p>
        <p style={styles.cardDetails}>{guests} guests, {bedrooms} bedrooms, {bathrooms} bathrooms</p>
        <p style={styles.price}>${price} per night</p>
        <p style={styles.rating}>Rating: {'⭐'.repeat(rating)} ({rating})</p>
      </div>
    </div>
  );
};

const App = () => {
  const listings = [
    {
      image: 'https://via.placeholder.com/300',
      title: "Stay in Prince's Purple Rain House",
      propertyType: 'Entire home',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 200,
      rating: 5,
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Join the Living Room Session with Doja Cat',
      propertyType: 'Private room',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 150,
      rating: 4,
    },
    {
      image: 'https://via.placeholder.com/300',
      title: "Sleepover at Polly Pocket's Compact",
      propertyType: 'Entire home',
      guests: 5,
      bedrooms: 3,
      bathrooms: 2,
      price: 250,
      rating: 4,
    },
    {
      image: 'https://via.placeholder.com/300',
      title: "Playdate at Polly Pocket's Compact",
      propertyType: 'Private room',
      guests: 3,
      bedrooms: 2,
      bathrooms: 1,
      price: 180,
      rating: 5,
    },
  ];

  return (
    <div style={styles.container}>
      {listings.map((listing, index) => (
        <ListingCard
          key={index}
          image={listing.image}
          title={listing.title}
          propertyType={listing.propertyType}
          guests={listing.guests}
          bedrooms={listing.bedrooms}
          bathrooms={listing.bathrooms}
          price={listing.price}
          rating={listing.rating}
        />
      ))}
    </div>
  );
};

export default ListingCard;
