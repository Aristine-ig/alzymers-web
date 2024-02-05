import React from "react";


export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="card-container">
      <img src="https://picsum.photos/300/250" alt="Card Image"></img>
      <p className="card-description">Boost Your Mind By Playing Games </p>
      <a href="https://www.mindgames.com/Brain+Games" className="card-btn"> Click Here</a>
    </div>
  );
};