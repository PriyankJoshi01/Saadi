import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Customer Support</h2>
        <p style={styles.text}>
          For inquiries, technical support, or assistance with your account, you can contact us through the following methods:
        </p>
        <ul style={styles.list}>
          <li><strong>Email:</strong> <a href="mailto:support@saadiconnect.com">support@saadiconnect.com</a></li>
          <li><strong>Phone:</strong> +1 (800) 123-4567 (Available Monday – Friday, 9:00 AM – 6:00 PM)</li>
          <li><strong>Live Chat:</strong> Click the chat icon on the website for instant assistance.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Office Location</h2>
        <p style={styles.text}>
          You can also visit us at our office or send physical documents to:
        </p>
        <address style={styles.address}>
          Saadi Connect Office<br />
          1234 Love Lane, Suite 100<br />
          City, State, 12345
        </address>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Social Media</h2>
        <p style={styles.text}>Follow us on social media for updates and engagement:</p>
        <ul style={styles.list}>
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Feedback & Suggestions</h2>
        <p style={styles.text}>
          We welcome your feedback to improve our services. Please share your thoughts at:
        </p>
        <p>
          <a href="mailto:feedback@saadiconnect.com">feedback@saadiconnect.com</a>
        </p>
      </section>
    </div>
  );
};

// Inline Styles for the Contact Component
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
  address: {
    fontStyle: 'italic',
    fontSize: '18px',
    color: '#555',
  },
};

export default Contact;
