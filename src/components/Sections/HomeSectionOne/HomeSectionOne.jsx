import React from "react";

function HomeSectionOne() {
  return (
    <section className="homeSectionOne">
      <div className="container__sectionOne">
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
    </section>
  );
}

export default HomeSectionOne;
