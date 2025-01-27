import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Assets/styles.css';
import RecipeList from './Component/Pages/RecipeList';
import Header from './Component/Header/Header';
import About from './Component/Pages/About';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/ErrorPage/NotFound';
import Gallery from './Component/GallerySwiper/Gallery';
import Feature from './Component/Pages/Feature';
import FAQ from './Component/Pages/FAQ';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
