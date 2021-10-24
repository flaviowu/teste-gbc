import React from "react";

function BlogCard(props) {
  const cardData = props.cardData;
  return (
    <div className="container__blogCard">
      <div className="wrapper__blogPost">
        <div className="wrapper__image">
          <img
            src={cardData.image}
            alt={`${cardData.title} by ${cardData.profile.name}`}
          />
        </div>
        <div className="blogPost__title">
          <h4>{cardData.title}</h4>
        </div>
      </div>
      <div className="wrapper__postAuthor">
        <img src={cardData.profile.image} alt={`${cardData.profile.name}`} />
        <span >
        {cardData.profile.name}
        </span >
      </div>
    </div>
  );
}

export default BlogCard;
