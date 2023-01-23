import React, { useState } from "react";
import Step from "../step/Step";
import "./steps.css";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const Steps = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const nextCarouselSlide = () => {
    if (activeSlide === 4) {
      setActiveSlide(1);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevCarouselSlide = () => {
    if (activeSlide === 1) {
      setActiveSlide(4);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <>
      <div className="steps">
        <Step number="01" info="3D Conception" cont="& Design" />
        <Step number="02" info="Interaction" cont="Design" />
        <Step number="03" info="VR World" cont="User Testing" />
        <Step number="04" info="Hydra VR" cont="Deploy" />
      </div>

      <div className="steps-carousel">
        <div
          className={
            activeSlide === 1
              ? "steps-carousel__step active"
              : "steps-carousel__step"
          }
        >
          <Step number="01" info="3D Conception" cont="& Design" />
        </div>
        <div
          className={
            activeSlide === 2
              ? "steps-carousel__step active"
              : "steps-carousel__step"
          }
        >
          <Step number="02" info="Interaction" cont="Design" />
        </div>
        <div
          className={
            activeSlide === 3
              ? "steps-carousel__step active"
              : "steps-carousel__step"
          }
        >
          <Step number="03" info="VR World" cont="User Testing" />
        </div>
        <div
          className={
            activeSlide === 4
              ? "steps-carousel__step active"
              : "steps-carousel__step"
          }
        >
          <Step number="04" info="Hydra VR" cont="Deploy" />
        </div>

        <BsChevronRight
          className="steps-carousel__button next"
          onClick={() => nextCarouselSlide()}
        />
        <BsChevronLeft
          className="steps-carousel__button prev"
          onClick={() => prevCarouselSlide()}
        />
      </div>
    </>
  );
};

export default Steps;
