import React from "react";

function RecipeCard(props) {
  const recipe = props.recipe;
  return (
    <div className="card__recipe">
      <div className="card__image">
      <img src={recipe.image} alt={`${recipe.title}`} />
      </div>
      <div className="wrapper__card-title-btn">
        <h3>{recipe.title}</h3>
        <button>See Recipe</button>
      </div>
    </div>
  );
}

export default RecipeCard;
