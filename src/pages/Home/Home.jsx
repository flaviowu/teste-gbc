import React from "react";
import Header from "../../components/Header/Header";
import HomeSectionFive from "../../components/Sections/HomeSectionFive/HomeSectionFive";
import HomeSectionFour from "../../components/Sections/HomeSectionFour/HomeSectionFour";
import HomeSectionOne from "../../components/Sections/HomeSectionOne/HomeSectionOne";
import HomeSectionThree from "../../components/Sections/HomeSectionThree/HomeSectionThree";
import HomeSectionTwo from "../../components/Sections/HomeSectionTwo/HomeSectionTwo";

function Home() {
  return (
    <div>
      <Header/>
      <HomeSectionOne />
      <HomeSectionTwo/>
      <HomeSectionThree/>
      <HomeSectionFour/>
      <HomeSectionFive/>
    </div>
  );
}

export default Home;
