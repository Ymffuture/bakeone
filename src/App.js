import React from 'react';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowNavbar from './componets/Navbar'; // Assuming Navbar component path
import MenuPage from './componets/MenuPage'; // Adjusted import path
import AboutPage from './componets/AboutPage'; // Adjusted import path
import HomePage from './componets/HomePage'; // Adjusted import path
import Footer from './componets/Footer'
import ContactPage from './componets/ContactPage'
import Recipe from './componets/Recipe'

function App() {
  return (
    <Router>
      <div>
        <ShowNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MenuPage" element={<MenuPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/Recipe" element={<Recipe />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
