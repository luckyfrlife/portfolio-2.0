import React, { useState } from "react";

const Card = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="resume__item">
      <div className="resume__header" onClick={() => setShowInfo(!showInfo)}>
        <h3 className="resume__subtitle">{props.title}</h3>
        <span className="resume__icon">{showInfo ? "-" : "+"}</span>
      </div>

      <div className={`${showInfo ? "show-content" : ""} resume__content`}>
        <div className="resume__date-title">
          <h3 className="resume__title">{props.subtitle}</h3>
          <span className="resume___date text-cs">{props.date}</span>
        </div>

        <p className="resume__description">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
