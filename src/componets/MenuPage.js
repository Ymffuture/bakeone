const MenuPage = () => {
  // Array of images with prices 

  const items = [
    { url: './img/img.jpeg', price: 9.99 },
    { url: './img/img2.jpeg', price: 18.54 },
    { url: './img/img3.jpeg', price: 82.36 },
    { url: './img/im4.jpeg', price: 43.99 },
    { url: './img/img5.jpeg', price: 69.39 },
    { url: './img/img6.jpeg', price: 90.00 },
  ];

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="image-grid">
        {items.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.url} alt={`Menu Item ${index + 1}`} />
            <div className="price-overlay">R{item.price}/g </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
