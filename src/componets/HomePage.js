import React from 'react';

const HomePage = () => {
  // Array of image URLs for the gallery section (replace with your actual image URLs)
  const images = [
    '/img/img4.webp',
  '/img/down.jpeg',
   '/img/123.jpeg',
   '/img/img4.webp',
   '/img/img4.webp',
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: 'url(/img/img2.webp)' }}>
        <div className="hero-text">
          <h1>Welcome to Sweet Dreams Bakery</h1>
          <p>Delicious treats made with love</p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to Sweet Dreams Bakery, where we create delicious and beautiful cakes, pastries, and desserts. Our
          team of skilled bakers uses the finest ingredients to craft treats that not only taste amazing but also look
          stunning. Whether you're celebrating a special occasion or just craving something sweet, we've got you covered.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2>Our Creations</h2>
        <div className="image-grid">
          {images.map((imageUrl, index) => (
            <div key={index} className="gallery-item">
              <img src={imageUrl} alt={`Gallery Item ${index + 1}`} />
              <p>Creation {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
