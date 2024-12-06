import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Mission</h2>
        <p style={styles.text}>
          Our mission is to provide a safe, reliable, and respectful platform for individuals to find compatible partners for marriage. 
          We aim to help individuals from diverse backgrounds, cultures, and regions find love, companionship, and meaningful relationships.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>How It Works</h2>
        <ul style={styles.list}>
          <li><strong>Profile Creation:</strong> Start by creating a personal profile where you can provide information about yourself, including your name, age, interests, and preferences. Upload your photos and specify what you are looking for in a potential partner.</li>
          <li><strong>Matchmaking:</strong> Our platform uses advanced algorithms to suggest compatible profiles based on your preferences and interests. Browse through other profiles and contact potential matches directly.</li>
          <li><strong>Safe & Secure:</strong> We prioritize your privacy and ensure your personal information is kept secure. We also have a strict verification process to ensure genuine profiles. Our customer support team is available to help resolve any concerns.</li>
          <li><strong>Communication & Meeting:</strong> After connecting with someone, you can start chatting, video calling, or schedule a meeting. Our platform helps facilitate meaningful conversations before making any big decisions.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Values</h2>
        <ul style={styles.list}>
          <li><strong>Respect:</strong> We believe in mutual respect and understanding in relationships.</li>
          <li><strong>Honesty:</strong> We strive to create an environment where honesty and transparency are at the forefront.</li>
          <li><strong>Safety:</strong> Protecting our users and their data is our top priority.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Why Choose Saadi Connect?</h2>
        <ul style={styles.list}>
          <li><strong>Diverse Database:</strong> We connect individuals from different cultures, regions, and communities, providing a wide range of choices.</li>
          <li><strong>Personalized Matches:</strong> Our matchmaking system takes into account personal preferences, lifestyle choices, and values.</li>
          <li><strong>Community:</strong> Join a growing community of like-minded individuals seeking meaningful relationships.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Contact Us</h2>
        <p style={styles.text}>If you have any questions or need assistance, please reach out to our customer support team at <strong>support@saadiconnect.com</strong>.</p>
      </section>
    </div>
  );
};

// Inline Styles for the About Component
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
  subHeader: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '10px',
  },
  section: {
    marginBottom: '30px',
  },
  text: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
  },
};

export default About;
