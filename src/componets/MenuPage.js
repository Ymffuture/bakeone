import React from 'react';

const MenuPage = () => {
  // Array of image URLs (replace with your actual image URLs)
  const images = [
    './img/img.jpeg',
    './img/img2.jpeg',
    './img/img3.jpeg',
    './img/im4.jpeg',
    './img/img5.jpeg',
    './img/img6.jpeg',
  ];

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="image-grid">
        {images.map((avatar, index) => (
          <div key={index} className="menu-item">
            <img src={avatar} alt={`Menu Item ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
