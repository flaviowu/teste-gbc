import React from "react";
import RecipeCard from "../../RecipeCard/RecipeCard";
import { recipes } from "../../../textContent/recipe";

function HomeSectionTwo() {
  return (
    <section className="homeSectionTwo">
      <div className="container__sectionTwo">
        <div className="wrapper__content-text">
          <h2>Our Best Recipes</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="wrapper__recipe-cards">
          {recipes.map((recipe) => (
            <RecipeCard key={"recipe" + recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeSectionTwo;
