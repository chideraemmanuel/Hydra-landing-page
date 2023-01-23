import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import logoText from "../../assets/logo-text.svg";
import Button from "../../components/button/Button";
import "./navbar.css";
// import { RiMenu3Fill } from "react-icons/ri";
// import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <a href="/" className="navbar__logo">
          <img src={logo} alt="Logo" />
          <img src={logoText} alt="Logo Text" />
        </a>
        <ul className="navbar__links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#process">How To</a>
          </li>
        </ul>

        <div className="navbar__buttons">
          <Button
            href="#contact"
            className="btn btn-transparent"
            text="Contact us"
          />
          <Button
            href="#opt-in"
            className="btn btn-primary"
            text="Join Hydra"
          />
        </div>

        <div className="mobile-menu">
          {!mobileMenuActive ? (
            //   <RiMenu3Fill
            //     onClick={() => {
            //       setMobileMenuActive(!mobileMenuActive);
            //     }}
            //   />
            // )
            <svg
              onClick={() => {
                setMobileMenuActive(!mobileMenuActive);
              }}
              width="33"
              height="26"
              viewBox="0 0 33 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="33"
                height="3.71429"
                rx="1.85714"
                fill="url(#paint0_linear_13_83)"
              />
              <rect
                y="22.2857"
                width="33"
                height="3.71429"
                rx="1.85714"
                fill="url(#paint1_linear_13_83)"
              />
              <rect
                x="9"
                y="11.1429"
                width="24"
                height="3.71429"
                rx="1.85714"
                fill="url(#paint2_linear_13_83)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_13_83"
                  x1="-8.62252e-09"
                  y1="3.46667"
                  x2="36.0395"
                  y2="3.46666"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C0B7E8" />
                  <stop offset="1" stopColor="#8176AF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_13_83"
                  x1="-3.90789"
                  y1="26"
                  x2="33"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C0B7E8" />
                  <stop offset="1" stopColor="#8176AF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_13_83"
                  x1="5.21062"
                  y1="13"
                  x2="33.0001"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C0B7E8" />
                  <stop offset="1" stopColor="#8176AF" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            // <FaTimes
            //   style={{ stroke: "url(#paint2_linear_13_83)" }}
            //   onClick={() => {
            //     setMobileMenuActive(!mobileMenuActive);
            //   }}
            // />
            <svg
              onClick={() => {
                setMobileMenuActive(!mobileMenuActive);
              }}
              // stroke='url("#paint2_linear_13_83")'
              fill='url("#paint2_linear_13_83")'
              strokeWidth="0"
              viewBox="0 0 352 512"
              // height="1em"
              // width="1em"
              width="40"
              height="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="paint0_linear_13_83"
                  x1="-8.62252e-09"
                  y1="3.46667"
                  x2="36.0395"
                  y2="3.46666"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C0B7E8" />
                  <stop offset="1" stopColor="#8176AF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_13_83"
                  x1="-3.90789"
                  y1="26"
                  x2="33"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C0B7E8" />
                  <stop offset="1" stopColor="#8176AF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_13_83"
                  x1="5.21062"
                  y1="13"
                  x2="33.0001"
                  y2="13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C0B7E8" />
                  <stop offset="1" stopColor="#8176AF" />
                </linearGradient>
              </defs>
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
            </svg>
          )}

          {mobileMenuActive && (
            <ul className="mobile-menu__links scale-up-hor-top">
              <li>
                <a href="#about" onClick={() => setMobileMenuActive(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMobileMenuActive(false)}>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  onClick={() => setMobileMenuActive(false)}
                >
                  Technologies
                </a>
              </li>
              <li>
                <a href="#how-to" onClick={() => setMobileMenuActive(false)}>
                  How To
                </a>
              </li>
              <div className="mobile-menu__links--buttons">
                <Button
                  href="#contact"
                  className="btn btn-transparent"
                  text="Contact us"
                  onClick={() => setMobileMenuActive(false)}
                />
                <Button
                  href="#opt-in"
                  className="btn btn-dark"
                  text="Join Hydra"
                  onClick={() => setMobileMenuActive(false)}
                />
              </div>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
