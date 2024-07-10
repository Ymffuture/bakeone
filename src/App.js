import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowNavbar from "./componets/Navbar";
import MenuPage from "./componets/MenuPage";
import AboutPage from "./componets/AboutPage";
import HomePage from "./componets/HomePage";
import Footer from "./componets/Footer";
import ContactPage from "./componets/ContactPage";
import Recipe from "./componets/Recipe";
import NotFoundPage from "./componets/NotFoundPage";





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
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
