import React, { useState, useEffect } from "react";
import "./backToTop.css";
import { BsArrowUp } from "react-icons/bs";

const BackToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <span className="back-to-top" onClick={() => scrollUp()}>
          <BsArrowUp />
          <span>Back to top</span>
        </span>
      )}
    </>
  );
};

export default BackToTop;
