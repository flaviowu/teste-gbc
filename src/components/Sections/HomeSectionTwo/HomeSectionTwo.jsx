import React from "react";
import RecipeCard from "../../RecipeCard/RecipeCard";
import { recipes } from "../../../textContent/recipe";

function HomeSectionTwo() {
  return (
    <div className="homeSectionTwo">
      <div className="content--text">
        <h3>Our Best Recipes</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="content--recipes">
        {recipes.map((recipe) => (
          <RecipeCard key={"recipe" + recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default HomeSectionTwo;
