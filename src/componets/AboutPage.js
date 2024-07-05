import React from 'react';

const AboutPage = () => {
  // Array of team member image URLs (replace with your actual image URLs)
  const teamImages = [
    'https://example.com/team1.jpg',
    'https://example.com/team2.jpg',
    'https://example.com/team3.jpg',
    'https://example.com/team4.jpg',
    'https://example.com/team5.jpg',
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: 'url(https://hensbreadproductions.com/wp-content/uploads/2021/09/hensbreadgif.gif)' }}>
        <div className="hero-text">
          <h1>About Sweet Dreams Bakery</h1>
          <p>Our story, our passion, our team</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="story-section">
        <h2>Our Story</h2>
        <p>
          Sweet Dreams Bakery started with a simple passion for baking and a desire to create delightful experiences
          through our delicious treats. From humble beginnings in a small kitchen, we've grown into a beloved local
          bakery, known for our creativity, quality, and commitment to customer satisfaction.
        </p>
      </div>

      {/* Meet the Team Section */}
      <div className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamImages.map((imageUrl, index) => (
            <div key={index} className="team-member">
              <img src={imageUrl} alt={`Team Member ${index + 1}`} />
              <p>Team Member {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
