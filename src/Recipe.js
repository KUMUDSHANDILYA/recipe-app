import React from "react";
import './App.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return (

        <div className = "col-6">

                   <div className = "recipe">

                         <h1>{title}</h1>
                        <ul>
                            {ingredients.map(ingredient => (

                                <li>{ingredient.text}</li>

                            ))}
                        </ul>
                        <p>Calories: {calories}</p>
                        <img src = {image} alt = ""/>

                   </div>

        </div>

    );
}

export default Recipe;