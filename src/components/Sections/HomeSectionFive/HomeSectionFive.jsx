import React from "react";

function HomeSectionFive() {
  return (
    <section className="homeSectionFive">
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
    </section>
  );
}

export default HomeSectionFive;
