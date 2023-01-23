import React from "react";
import "./sectionHeader.css";
// import rightArrow from "../../assets/right-arrow.svg";
import { BsArrowRight } from "react-icons/bs";

const SectionHeader = ({ title, cont, text }) => {
  return (
    <div className="section-header">
      <h2
        className="section-header__title"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        {title}
        <br />
        <span>
          {cont} <BsArrowRight />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="228"
            height="100"
            viewBox="0 0 228 100"
            fill="none"
          >
            <path
              d="M198.833 50L157.167 50M198.833 50L182.167 66.6666M198.833 50L182.167 33.3333"
              stroke="#C0B7E8"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path d="M157.5 50H0" stroke="#C0B7E8" stroke-width="3" />
          </svg> */}
        </span>
      </h2>

      <p
        className="section-header__detail"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        {text}
      </p>
    </div>
  );
};

export default SectionHeader;
