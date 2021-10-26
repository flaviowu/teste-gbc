import React from "react";
import imageSectionThree from "../../../assets/sections-backgrounds/section-three.svg";


function HomeSectionThree() {
  return (
    <section className="section-three">
      <div className="container__content-image">
        <img src={imageSectionThree} alt="cooking girl in a kitchen"/>
      </div>
      <div className="container__content-three">
        <div className="wrapper__title">
          <h2>The best services ready</h2>
          <h2>To serve you</h2>
        </div>
        <div className="wrapper__paragraphs-btn">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <div className="wrapper__btn--know-more">
            <button>Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HomeSectionThree;
