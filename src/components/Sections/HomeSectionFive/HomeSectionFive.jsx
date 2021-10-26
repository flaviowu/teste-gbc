import React from "react";
import imageSectionFive from "../../../assets/sections-backgrounds/section_five.svg"

function HomeSectionFive() {
  return (
    <section className="section-five">
      <div className="container__sectionFive">
        <div className="wrapper__title">
          <h2>Join our membership to get a special offer</h2>
        </div>
        <div className="wrapper__form-join">
          <form action="" className="form-join">
            <input
              id="join-input"
              name="email"
              type="email"
              placeholder="Enter your email adress"
            />
            <input id="join-btn" type="submit" value="join" />
          </form>
        </div>
      </div>
        <div className="container__sectionFive-image">
          <img src={imageSectionFive} alt="Two guys making a deal"/>
        </div>
    </section>
  );
}

export default HomeSectionFive;
