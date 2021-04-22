import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from './recipe';

function App() {

  const APP_ID = 'de182dee';
  const APP_KEY = '44cb9b864309b99bb957578351a04ef6';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async ()=>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data);
  };

  const updateSearch = (e) =>{
    setSearch(e.target.value);
  };

  const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type='text' value={search} onChange={updateSearch} placeholder="Type in an ingredient!"/>
          <button className="search-button" type='submit'>Search</button>
        </form>
        <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients} 
          servings = {recipe.recipe.yield} />
        ))}
        </div>
      </header>
      </div>
  );
}

export default App;
