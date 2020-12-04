import React, { useState, useEffect, useContext } from 'react';
import RecipeCard from './RecipeCard';
import { Header } from 'semantic-ui-react';
import { DataContext } from '../context/DataContext';
import useDebounce from '../hooks/useDebounce';
import './header.css';

const APP_ID = process.env.REACT_APP_APP_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

function Recipes() {
  const [searchTerm] = useContext(DataContext);
  const [recipes, setRecipes] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 750);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        `https://api.edamam.com/search?q=${debouncedSearchTerm}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      response = await response.json();
      setRecipes(response.hits);
      console.log(response.hits);
    }
    fetchMyAPI();
  }, [debouncedSearchTerm]);

  return (
    <div className="page-header">
      <Header as="h1" icon="food" content="Be Master in Your Kitchen" />
      <RecipeCard recipes={recipes}></RecipeCard>
    </div>
  );
}

export default Recipes;
