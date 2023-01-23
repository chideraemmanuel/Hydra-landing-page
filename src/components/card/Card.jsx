import React from "react";
import "./card.css";
import Button from "../../components/button/Button";

const Card = ({ title, detail, image }) => {
  return (
    <div className="card" data-aos="fade-up" data-aos-duration="1500">
      <img
        src={process.env.PUBLIC_URL + `assets/${image}.png`}
        alt="VR simulation"
        className="card__image"
      />
      <h3 className="card__title">{title}</h3>
      <p className="card__detail">{detail}</p>
      <Button
        href="#opt-in"
        className="btn btn-primary card__button"
        text="Try it Now"
      />
    </div>
  );
};

export default Card;
