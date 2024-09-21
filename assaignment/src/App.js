import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Assets/styles.css";
import RecipeList from './Component/Pages/RecipeList';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import NotFound from './Component/ErrorPage/NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
