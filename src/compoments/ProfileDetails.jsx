import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = () => {
  // Extract the ID from the URL parameters
  const { id } = useParams();

  // Mock profile data (you can replace this with actual data or fetch from an API)
  const profiles = Array(10).fill().map((_, index) => ({
    id: index + 1,
    name: `John Doe ${index + 1}`,
    age: 25 + index,
    education: `Bachelor's in Computer Science`,
    work: `Software Engineer`,
    cast: `Cast ${index + 1}`,
    state: `State ${index + 1}`,
    images: [
      `https://randomuser.me/api/portraits/women/${(index % 10) + 1}.jpg`,
      `https://randomuser.me/api/portraits/women/${(index % 10) + 2}.jpg`,
      `https://randomuser.me/api/portraits/women/${(index % 10) + 3}.jpg`
    ]
  }));

  // Find the selected profile based on the ID
  const profile = profiles.find(p => p.id === parseInt(id));

  return (
    <div style={styles.container}>
      {profile ? (
        <>
          <h1 style={styles.header}>{profile.name}</h1>
          <div style={styles.profileSection}>
            <img
              src={profile.images[0]}
              alt={profile.name}
              style={styles.profileImage}
            />
            <div style={styles.infoContainer}>
              <div style={styles.infoItem}>
                <span style={styles.label}>Age:</span> {profile.age}
              </div>
              <div style={styles.infoItem}>
                <span style={styles.label}>Education:</span> {profile.education}
              </div>
              <div style={styles.infoItem}>
                <span style={styles.label}>Work:</span> {profile.work}
              </div>
              <div style={styles.infoItem}>
                <span style={styles.label}>Cast:</span> {profile.cast}
              </div>
              <div style={styles.infoItem}>
                <span style={styles.label}>State:</span> {profile.state}
              </div>
            </div>
          </div>

          {/* Display additional images */}
          <div style={styles.imagesContainer}>
            <h2 style={styles.subHeader}>Other Photos:</h2>
            <div style={styles.additionalImages}>
              {profile.images.map((image, index) => (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img key={index} src={image} alt={`Image ${index + 1}`} style={styles.additionalImage} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Profile not found</p>
      )}
    </div>
  );
};

// Inline Styles for the ProfileDetails Component
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
  profileSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profileImage: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  infoContainer: {
    fontSize: '18px',
    color: '#555',
    textAlign: 'left',
    paddingLeft: '20px',
  },
  infoItem: {
    margin: '10px 0',
    fontSize: '18px',
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  imagesContainer: {
    marginTop: '20px',
  },
  subHeader: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  additionalImages: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
  },
  additionalImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export default ProfileDetails;
