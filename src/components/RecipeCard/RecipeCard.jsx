import React from "react";

function RecipeCard(props) {
  const recipe = props.recipe;
  return (
    <div className="recipe--card">
      <img src={recipe.image} alt={`${recipe.title}`} />
      <div className="card--titleButton">
        <h3>{recipe.title}</h3>
        <button>See Recipe</button>
      </div>
    </div>
  );
}

export default RecipeCard;
