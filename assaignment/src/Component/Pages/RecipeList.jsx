import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import Gallery from '../GallerySwiper/Gallery';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/movie.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div>
      <Gallery />
      <div className="container">
        <h1>Choose From Trusted Restaurants in{" "}<span style={{ color: "rgb(73, 69, 190)" }}>One Single Order</span></h1>
        <div className="row">
          {recipes.map(recipe => (
            <div className=" col-lg-4 col-md-6 col-sm-12" key={recipe.id}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
