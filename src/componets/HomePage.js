import React from 'react';

const HomePage = () => {
  const images = [
    { url: '/img/img.jpeg', title: 'Delicious Cake' },
    { url: '/img/pexels-ozrenildo-1291712.jpg', title: 'Chocolate Delight' },
    { url: '/img/pexels-quang-nguyen-vinh-222549-2144200.jpg', title: 'Vanilla Surprise' },
    { url: '/img/pexels-skyler-ewing-266953-4600653.jpg', title: 'Fruit Tart' },
    { url: '/img/pexels-ryasnik-3840200.jpg', title: 'Cupcake Assortment' },
    { url: '/img/img3.jpeg', title: 'Special Occasion Cake' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: 'url(/img/img2.webp)' }}>
        <div className="hero-text">
          <h1>Welcome to Bakeone</h1>
          <p>Delicious treats made with love</p>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to Bakeone, where we create delicious and beautiful cakes, pastries, and desserts. Our
          team of skilled bakers uses the finest ingredients to craft treats that not only taste amazing but also look
          stunning. Whether you're celebrating a special occasion or just craving something sweet, we've got you covered.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <h2>Our Creations</h2>
        <div className="image-grid grid-col">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.url} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
