/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const Gallery = () => {
  // Array of image URLs (using placeholder images for testing)
  const images = [
    'https://via.placeholder.com/400x300?text=Wedding+1',
    'https://via.placeholder.com/400x300?text=Wedding+2',
    'https://via.placeholder.com/400x300?text=Wedding+3',
    'https://via.placeholder.com/400x300?text=Wedding+4',
    'https://via.placeholder.com/400x300?text=Engagement+1',
    'https://via.placeholder.com/400x300?text=Engagement+2',
    'https://via.placeholder.com/400x300?text=Cultural+Event+1',
    'https://via.placeholder.com/400x300?text=Cultural+Event+2',
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Gallery</h1>
      
      {/* Gallery Grid displaying the images */}
      <div style={styles.galleryGrid}>
        {images.map((image, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img
              src={image}  // Using the image URL from the array
              alt={`Gallery Image ${index + 1}`}  // Alternate text for accessibility
              style={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles for the Gallery component
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 images per row, adjust as needed
    gap: '20px',
    marginTop: '20px',
  },
  imageWrapper: {
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default Gallery;
