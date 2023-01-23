import React from "react";
import "./step.css";
import { BsArrowRight } from "react-icons/bs";

const Step = ({ number, info, cont }) => {
  return (
    <div className="step">
      <span className="step__number">{number}</span>
      <span className="step__info">
        <BsArrowRight />
        <p>
          {info} <br /> {cont}
        </p>
      </span>
    </div>
  );
};

export default Step;
