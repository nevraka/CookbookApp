import React, { useState, useEffect } from 'react';
import { Image, Card } from 'semantic-ui-react';

const APP_ID = '3f0c57f3';
const APP_KEY = 'c4e827c99045c3d42323a5bfc687041c';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        `https://api.edamam.com/search?q=food&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      response = await response.json();
      setRecipes(response.hits);
      console.log(response.hits);
    }
    fetchMyAPI();
  }, []);

  return (
    <div>
      <h1>count: {recipes.length}</h1>
      {recipes.map((recipe) => {
        return (
          <Card
            image={recipe.recipe.image}
            header={recipe.recipe.label}
            meta={recipe.recipe.healthLabels}
          />
        );
      })}
    </div>
  );
}

export default Recipes;
