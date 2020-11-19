import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

const App = () =>  {

    const APP_ID = '200ec70b';
    const APP_KEY = '311348aa8f7601083dc70bbd63e7539c';


    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chocolate');

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(

        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

        );
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
    }

    const updateSearch = event => {
        setSearch(event.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

  return (
    <div className="App">

      <form onSubmit = {getSearch} className = "search-form">
        <input className = "search-bar" type = "text" value = {search} onChange = {updateSearch}/>
        <button className = "search-button" type = "submit">Search</button>
      </form>
     <div className = "container">

         <div className = "row">


                    {recipes.map(recipe => (

                    <Recipe key = {recipe.recipe.uri} title = {recipe.recipe.label} calories = {recipe.recipe.calories}

                    image = {recipe.recipe.image}
                    ingredients = {recipe.recipe.ingredients} />

                  ))}



         </div>

     </div>
    </div>
  );
}

export default App;
