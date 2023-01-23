import React from "react";
import "./button.css";

const Button = ({ href, className, text }) => {
  return (
    <a
      href={href}
      className={className}
      // data-aos="fade-up"
      // data-aos-duration="1500"
      // data-aos-delay="200"
    >
      {text}
    </a>
  );
};

export default Button;
