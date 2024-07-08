// NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Page Not Found</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    color: '#343a40',
  },
  title: {
    fontSize: '25rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '4.5rem',
    marginBottom: '1.5rem',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007bff',
    textDecoration: 'none',
    backgroundColor: '#282c34',
    padding: '8px',
    borderRadius: '4px'
  },
};

export default NotFoundPage;
