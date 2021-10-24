import React, { useState } from "react";
import { blogCardInfo } from "../../../textContent/blogCardsInfo";
import BlogCard from "../../BlogCard/BlogCard";

function HomeSectionFour() {
  const [cards, setCards] = useState(blogCardInfo);

  return (
    <section className="homeSectionFour">
      <div className="container__sectionFour">
        <div className="wrapper__text">
          <h2>Read Our Blog</h2>
          <p>
            Far far away the word mountains, far from the countries Vokalia and
            Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="wrapper__blog-Carousel">
          {/* <Carousel> **IMPLEMENTAR** */}
            {cards.map((blogCard) => (
              <BlogCard key={"post" + blogCard.id} cardData={blogCard} />
            ))}
          {/* </Carousel> */}
        </div>
      </div>
    </section>
  );
}
export default HomeSectionFour;
