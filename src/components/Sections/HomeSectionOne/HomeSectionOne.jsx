import React from "react";
import imageSectionOne from "../../../assets/sections-backgrounds/section-One.svg"

function HomeSectionOne() {
  return (
    <section className="section">
      <div className="column-1 container__sectionOne-content">
        <div className="wrapper__title">
          <h2>Ready for Trying a new recipe?</h2>
        </div>
        <div className="wrapper__form-search">
          <form action="" className="form__searchRecipe">
            <input type="text" className="input__searchRecipe-text" placeholder="Search healthy recipes"/>
            <input type="submit" className="input__searchRecipe-btn" value="go"/>
          </form>
        </div>
      </div>
        <div className="column-2 container__sectionOne-image">
          <img src={imageSectionOne} alt="people with a giant apple"/>
        </div>
    </section>
  );
}

export default HomeSectionOne;
