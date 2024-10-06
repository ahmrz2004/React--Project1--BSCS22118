import React from 'react';
import Navbar from './Navbar'; 
import SearchBar from './SearchBar';
import Categories from './Categories';
import ListingCard from './ListingCard';
import Footer from './Footer'; 

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f8f8f8',
  },
  header: {
    width: '100%',
  },
  listingsSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '20px 0',
  },
};

const Home = () => {
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
    {
      image: 'https://via.placeholder.com/300',
      title: 'Luxury Retreat in the Mountains',
      propertyType: 'Entire home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 300,
      rating: 5,
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Charming Cabin by the Lake',
      propertyType: 'Entire home',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 220,
      rating: 4,
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Urban Oasis in the Heart of the City',
      propertyType: 'Entire home',
      guests: 5,
      bedrooms: 3,
      bathrooms: 2,
      price: 350,
      rating: 5,
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Sunny Beachfront Paradise',
      propertyType: 'Private room',
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      price: 175,
      rating: 4,
    },
    
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <Navbar />
        <SearchBar />
      </header>
      <Categories />
      <div style={styles.listingsSection}>
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
      <Footer /> {/* Updated Footer Component */}
    </div>
  );
};

export default Home;
