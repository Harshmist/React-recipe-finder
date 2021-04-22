import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, servings})=>{
    return(
<div className={style.recipes}>
<h1>{title}</h1>
<img src={image}></img>
<ul>
    {ingredients.map(ingredients =>(
        <li>{ingredients.text}</li>
    ))}
</ul>
<p>Calories per serving: {Math.round((parseInt(calories))/ servings)}</p>
<p>Number of servings: {servings}</p>
</div>
    );
}

export default Recipe;