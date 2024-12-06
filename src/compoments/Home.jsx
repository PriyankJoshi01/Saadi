import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Array to hold mock profile data
  const profiles = Array(10).fill().map((_, index) => ({
    id: index + 1,
    name: `John Doe ${index + 1}`,
    age: 25 + index,
    cast: `Cast ${index + 1}`,
    state: `State ${index + 1}`,
    imageUrl: `https://randomuser.me/api/portraits/women/${(index % 10) + 1}.jpg`,  // Random girl's image URL
  }));

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Personal Profiles</h1>

      {/* Displaying 10 Cards */}
      <div style={styles.cardGallery}>
        {profiles.map((profile) => (
          <Link to={`/profile/${profile.id}`} key={profile.id} style={styles.cardLink}>
            <div style={styles.card}>
              <div style={styles.imageContainer}>
                <img
                  src={profile.imageUrl}
                  alt={`Profile ${profile.id}`}
                  style={styles.profileImage}
                />
              </div>
              <div style={styles.infoContainer}>
                <h2 style={styles.infoHeader}>Name: {profile.name}</h2>
                <p style={styles.infoText}>Age: {profile.age}</p>
                <p style={styles.infoText}>Cast: {profile.cast}</p>
                <p style={styles.infoText}>State: {profile.state}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Inline Styles for the Home Component
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  cardGallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',  // Ensures 5 items per row
    gap: '20px',
    marginTop: '30px',
  },
  cardLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
  },
  imageContainer: {
    marginBottom: '20px',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #333',
  },
  infoContainer: {
    fontSize: '18px',
    color: '#555',
  },
  infoHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  infoText: {
    fontSize: '16px',
    margin: '5px 0',
  },
};

export default Home;
